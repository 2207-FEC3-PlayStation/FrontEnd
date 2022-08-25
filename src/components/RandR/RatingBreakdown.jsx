import React from 'react';
import StarRating from './StarRating.jsx';

function RatingBreakdown(props) {
  return (
    <div>
      <h3>Ratings and Reviews</h3>
      <h1>4.9</h1>
      <StarRating style={{float: "right"}}/>
    </div>
  )
}

export default RatingBreakdown;