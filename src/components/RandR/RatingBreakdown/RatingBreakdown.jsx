import React from 'react';
import StarRating from './StarRating.jsx';
import RatingsBar from './RatingsBar.jsx';
import CharsBreakdown from './CharsBreakdown.jsx';

function RatingBreakdown(props) {
  return (
    <div style={{width: "30%", display: 'inline-block', verticalAlign: 'top'}}>
      <h3>Ratings and Reviews</h3>
      <h1 style={{display: 'inline-block', verticalAlign: 'top'}}>4.9</h1>
      <StarRating/>
      <p>x % of reviews reccomend this product</p>
      <RatingsBar/>
      <CharsBreakdown/>
    </div>
  )
}

export default RatingBreakdown;