import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';
import ComparisonsModal from './ComparisonsModal.jsx';
import StarRating from '../../components/RandR/RatingBreakdown/StarRating.jsx';
import server from '../../serverRequests.js';


const Card = styled.div`
  border: #eceaea 2px solid;
  border-radius: 5px;
  color: black;
  font-size: 20px;
  margin: 3%;
  margin-bottom: 0;
  position: relative;
  padding-bottom: 2%;
  margin-left: 0;
  margin-right: 4%;
  background-color: #eceaea;
  &:hover {
    box-shadow: 0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5);
  }
`
const Button = styled.button`
  background: transparent url(${starbutton}) no-repeat top;
  height: 25px;
  width: 25px;
  border: none;
  position: absolute;
  top: 2%;
  right: 5%;
  &:hover {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`
const Text = styled.small`
  color: rgb(57, 57, 57);
  padding: 5%;
`
const SmallText = styled(Text)`
font-size: 13px;
`
const Img = styled.img`
  width:180px;
  height:220px;
  opacity: 0.9;
  border-radius: 5px;
`
const Prices = styled.small`
display: inline-block;
margin: 0px;
padding-left: 5%;
`
function RelatedItem (props) {

  const [starClick, setStarClick] = useState(false);
  const [reviews, setReviews] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToTenth, setRatingToTenth] = useState(0);
  const [image, setImage] = useState();
  let [price, setPrice] = useState();
  let [saleprice, setSalePrice] = useState();
  let [onSale, setOnSale] = useState(false);


  // gets styles of the related product and adds the default thumbnail picture to the image source
  // if there is no default style, it grabs the first picture in the list
  useEffect(() => {
    var thumbnail = '';
    if (props.item) {
      server.get('/products/styles', {product_id: props.item.id})
        .then((data)=> {
          var results = data.data.results;
          for (var i = 0; i < results.length; i++) {
            if (results[i]['default?'] === true) {
              thumbnail = results[i].photos[0].thumbnail_url;
              setImage(thumbnail);
              if (results[i].sale_price === null) {
                setPrice(results[i].original_price);
                setSalePrice();
              } else {
                setPrice(results[i].original_price);
                setSalePrice(results[i].sale_price);
                setOnSale(true);
              }
            }
          }
          if (thumbnail === '') {
            thumbnail = data.data.results[0].photos[0].thumbnail_url
            setImage(thumbnail);
            if (results[0].sale_price === null) {
              setPrice(results[0].original_price);
              setSalePrice();
            } else {
              setPrice(results[0].original_price);
              setSalePrice(results[0].sale_price);
              setOnSale(true);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [props.item])

  //gets all review star data for the related item
  useEffect(() => {
    if (props.item) {
      server.get('/reviews/meta', {'product_id': props.item.id})
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [props.item])

  //calculates the average star rating for the related item
  useEffect(() => {
    if (reviews) {
      let sum = 0;
      let count = 0;
      for(var key in reviews.ratings) {
        let thisKey = parseInt(key);
        let thisVal = parseInt(reviews.ratings[key]);
        count += thisVal;
        sum += thisVal * thisKey;
      }
      let average = (Math.round(4 * sum / count) / 4).toFixed(2);
      let tenth = (Math.round(4 * sum / count) / 4).toFixed(1);
      setAvgRating(average);
      setRatingToTenth(tenth);
    }
  }, [reviews])


  function showModal () {
    setStarClick(true);
  }

  function hideModal () {
    setStarClick(false);
  }

  // future enhancement - on hover, load other style images in a scrollable carousel. Clicking on a thumbnail should change the preview image to display the image clicked. The selection of a different image should persist even after no longer hovering over this card. Clicking on the preview image, and anywhere on the card other than a thumbnail image carousel, will continue to navigate the user to that product’s detail page.

  return (
      <Card onClick={props.handleProduct}>
        <ComparisonsModal show={starClick} handleClose={hideModal} item={props.item} prod={props.prod}>
        </ComparisonsModal>
        <Img src={image} alt={props.item.id}/><br></br>
        <Button onClick={showModal}></Button>
        <SmallText>{props.item.category.toUpperCase()}</SmallText>
        <br></br>
        <Text data-testid="relatedItemName">{props.item.name}</Text><br></br>
        <SmallText>${props.item.default_price}</SmallText><br></br>
        {/* <Prices>
          <span className={
            onSale ? 'price-onsale': 'price'
          }>{'$' + price}</span>
          <span className={
            onSale ? 'saleprice-onsale': 'saleprice'
          }>{'$'+saleprice}</span>
        </Prices> */}
        <Text><StarRating avgRating={avgRating}/></Text>
      </Card>
  )
}

export default RelatedItem;
