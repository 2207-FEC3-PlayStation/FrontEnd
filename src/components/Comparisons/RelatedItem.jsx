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
  opacity: 0.4;
`
function RelatedItem (props) {

  const [starClick, setStarClick] = useState(false);
  const [reviews, setReviews] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToTenth, setRatingToTenth] = useState(0);

  useEffect(() => {
    console.log(props);
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
    console.log('Clicked Star Button');
    setStarClick(true);
  }

  function hideModal () {
    console.log('close')
    setStarClick(false);
  }

  return (
      <Card>
        <ComparisonsModal show={starClick} handleClose={hideModal}>
        </ComparisonsModal>
        <Img src={props.item.style} alt="product image"/><br></br>
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
