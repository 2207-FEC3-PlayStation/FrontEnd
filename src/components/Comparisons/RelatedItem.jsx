import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';
import ComparisonsModal from './ComparisonsModal.jsx';
import StarRating from '../../components/RandR/RatingBreakdown/StarRating.jsx';
import server from '../../serverRequests.js';


const Card = styled.div`
  border: 1px solid gray;
  color: black;
  font-size: 20px;
  margin: 3%;
  margin-bottom: 0;
  position: relative;
  padding-bottom: 2%;
  margin-left: 0;
  margin-right: 4%;
`
const Button = styled.button`
  background: transparent url(${starbutton}) no-repeat top;
  height: 25px;
  width: 25px;
  border: none;
  position: absolute;
  top: 2%;
  right: 5%;
`
const Text = styled.small`
  color: rgb(57, 57, 57);
  padding: 5%;
`
const Img = styled.img`
  width:180px;
  height:220px;
  opacity: 0.75;
`
function RelatedItem (props) {

  const [starClick, setStarClick] = useState(false);
  const [reviews, setReviews] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToTenth, setRatingToTenth] = useState(0);
  const [image, setImage] = useState();


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
            }
          }
          if (thumbnail === '') {
            thumbnail = data.data.results[0].photos[0].thumbnail_url
            setImage(thumbnail);
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

  return (
      <Card onClick={props.handleProduct}>
        <ComparisonsModal show={starClick} handleClose={hideModal} item={props.item} prod={props.prod}>
        </ComparisonsModal>
        <Img src={image} alt={props.item.id}/><br></br>
        <Button onClick={showModal}></Button>
        <Text>{props.item.category.toUpperCase()}</Text>
        <br></br>
        <Text data-testid="relatedItemName">{props.item.name}</Text><br></br>
        <Text>${props.item.default_price}</Text><br></br>
        <Text><StarRating avgRating={avgRating}/></Text>
      </Card>
  )
}

export default RelatedItem;
