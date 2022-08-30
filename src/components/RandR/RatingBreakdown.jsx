import React, {useEffect, useState} from 'react';
import StarRating from './RatingBreakdown/StarRating.jsx';
import RatingsBar from './RatingBreakdown/RatingsBar.jsx';
import CharsBreakdown from './RatingBreakdown/CharsBreakdown.jsx';

function RatingBreakdown({reviews, avgRating, ratingToTenth}) {
  const [displayAvg, setDisplayAvg] = useState('');

  // useEffect(() => {
  //   if (avgRating) {
  //     console.log('avgrating: ', avgRating);
  //     console.log('fixed: ', avgRating.toFixed(1));
  //     setDisplayAvg(avgRating.toFixed(1));
  //   }
  // }, [])  //figure out how to get this to run at the right time

  return (
    <div style={{width: "30%", display: 'inline-block', verticalAlign: 'top'}}>
      <h3>Ratings and Reviews</h3>
      <h1 style={{display: 'inline-block', verticalAlign: 'top'}}>{ratingToTenth}</h1>
      <StarRating reviews={reviews} avgRating={avgRating}/>
      <p>x % of reviews recommend this product</p>
      <RatingsBar/>
      <CharsBreakdown/>
    </div>
  )
}

export default RatingBreakdown;