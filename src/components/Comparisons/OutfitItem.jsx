import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import xbutton from '../../assets/xbutton.png';
import StarRating from '../../components/RandR/RatingBreakdown/StarRating.jsx';
import server from '../../serverRequests.js';

const Card = styled.div`
  border: 1px solid gray;
  color: black;
  font-size: 20px;
  margin: 3%;
  position: relative;
  padding-bottom: 2%;
  margin-bottom: 15px;
  margin-left: 0px;;
  margin-right: 5%;
  margin-top: 0px;
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
const Button = styled.button`
  background: transparent url(${xbutton}) no-repeat top;
  height: 25px;
  width: 25px;
  border: none;
  position: absolute;
  top: 3%;
  right: 5%;
`

function OutfitItem (props) {

  const [deleteClicked, setDeleteClicked] = useState(false);
  const [image, setImage] = useState();
  const [reviews, setReviews] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToTenth, setRatingToTenth] = useState(0);


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

  return (
      <Card>
      <Img src={image}></Img><br></br>
      <Button onClick={props.handleDelete} value={props.item}></Button>
      <Text>{props.item.category.toUpperCase()}</Text><br></br>
      <Text>{props.item.name}</Text><br></br>
      <Text>{props.item.default_price}</Text><br></br>
      <Text><StarRating avgRating={avgRating}/></Text>
      </Card>
  )
}

export default OutfitItem;
