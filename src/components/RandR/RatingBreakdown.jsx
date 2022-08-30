import React, {useEffect, useState} from 'react';
import StarRating from './RatingBreakdown/StarRating.jsx';
import RatingsBar from './RatingBreakdown/RatingsBar.jsx';
import CharsBreakdown from './RatingBreakdown/CharsBreakdown.jsx';

function RatingBreakdown({reviews, avgRating, ratingToTenth, recommended}) {

  return (
    <div style={{width: "30%", display: 'inline-block', verticalAlign: 'top'}}>
      <h3>Ratings and Reviews</h3>
      <h1 style={{display: 'inline-block', verticalAlign: 'top'}}>{ratingToTenth}</h1>
      <StarRating avgRating={avgRating}/>
      <p>{recommended}% of reviews recommend this product</p>
      <RatingsBar/>
      <CharsBreakdown/>
    </div>
  )
}

export default RatingBreakdown;