import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import Reviews from './Reviews.jsx';
import server from '../../serverRequests.js';
import styled from 'styled-components';

const RandRComp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const RatingsComp = styled.div`
  display: flex;
  flex-basis: 30%
`
const ReviewsComp = styled.div`
  display: flex;
  flex-basis: 60%
`

function RandR ({prod}) {

  const [product_id, setProduct_id] = useState(null);
  const [reviews, setReviews] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToTenth, setRatingToTenth] = useState(0);
  const [recommendedPerc, setRecommendedPerc] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
    if (prod) {
      setProduct_id(prod.id)
    }
  }, [prod]);

  useEffect(() => {
    if (product_id) {
      setProduct_id
      server.get('/reviews/meta', {'product_id': product_id})
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [product_id])

  useEffect(() => {
    if (reviews) {
      let sum = 0;
      let reviewCount = 0;
      for(var key in reviews.ratings) {
        let thisKey = parseInt(key);
        let thisVal = parseInt(reviews.ratings[key]);
        reviewCount += thisVal;
        sum += thisVal * thisKey;
      }
      let average = (Math.round(4 * sum / reviewCount) / 4).toFixed(2);
      let tenth = (Math.round(4 * sum / reviewCount) / 4).toFixed(1);
      setAvgRating(average);
      setRatingToTenth(tenth);
      setCount(reviewCount);
    }
  }, [reviews])

  useEffect(() => {
    if (reviews.recommended) {
      let recc = parseInt(reviews.recommended.true);
      let noRecc = parseInt(reviews.recommended.false);
      let recommended =  100 * (recc / (recc  + noRecc));
      setRecommendedPerc(recommended.toFixed(0));
    }
  }, [reviews.recommended])

  return (
    <RandRComp>
      <RatingsComp>
        <RatingBreakdown reviews={reviews} avgRating={avgRating} ratingToTenth={ratingToTenth} recommended={recommendedPerc} count={count}/>
      </RatingsComp>
      <ReviewsComp>
        <Reviews product_id={product_id} count={count}/>
      </ReviewsComp>
    </RandRComp>
  )
}

export default RandR;