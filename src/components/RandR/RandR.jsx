import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import Reviews from './Reviews.jsx';
import server from '../../serverRequests.js';

function RandR ({prod}) {

  const [reviews, setReviews] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToTenth, setRatingToTenth] = useState(0);

  useEffect(() => {
    if (prod) {
      server.get('/reviews/meta', {'product_id': prod.id})
      .then((data) => {
        setReviews(data.data);
        return reviews
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [prod])

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
    <React.Fragment>
      <RatingBreakdown reviews={reviews} avgRating={avgRating} ratingToTenth={ratingToTenth}/>
      <Reviews/>
    </React.Fragment>
  )
}

export default RandR;