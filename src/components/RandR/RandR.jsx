import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import Reviews from './Reviews.jsx';
import server from '../../serverRequests.js';
import styled from 'styled-components';

const RandRComp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow-y: auto;
  overflow-x: hidden;
  border-top: 1px solid black;
  padding-top: 10px;
`

const RatingsComp = styled.div`
  display: flex;
  flex-basis: 35%;
  margin-right: 60%;
  flex-direction: column;
`
const ReviewsComp = styled.div`
  display: flex;
  position: absolute;
  left: 40%;
  flex-basis: 60%;
  max-height: 75%;
`

function RandR ({prod}) {

  const [product_id, setProduct_id] = useState(null);
  const [reviews, setReviews] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToTenth, setRatingToTenth] = useState(0);
  const [recommendedPerc, setRecommendedPerc] = useState();
  const [count, setCount] = useState();
  const [ratingFilter, setRatingFilter] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState('none');

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
    if (ratingFilter.length > 0) {
      setFiltersApplied('flex');
    } else {
      setFiltersApplied('none');
    }
  }, [ratingFilter])

  useEffect(() => {
    if (reviews.recommended) {
      let recc = parseInt(reviews.recommended.true);
      let noRecc = parseInt(reviews.recommended.false);
      let recommended =  100 * (recc / (recc  + noRecc));
      setRecommendedPerc(recommended.toFixed(0));
    }
  }, [reviews.recommended])

  let updateRatingFilter = (value) => {
    let newRatingFilter = [...ratingFilter];
    let index = newRatingFilter.indexOf(value)
    if (index === - 1) {
      newRatingFilter.push(value)
    } else {
      newRatingFilter.splice(index, 1);
    }
    setRatingFilter(newRatingFilter);
  }

  return (
    <RandRComp>
      <RatingsComp>
        <RatingBreakdown update={updateRatingFilter} filtersApplied={filtersApplied} ratingFilter={ratingFilter} reviews={reviews} avgRating={avgRating} ratingToTenth={ratingToTenth} recommended={recommendedPerc} count={count}/>
      </RatingsComp>
      <ReviewsComp>
        <Reviews ratingFilter={ratingFilter} product_id={product_id} count={count}/>
      </ReviewsComp>
    </RandRComp>
  )
}

export default RandR;