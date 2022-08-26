import React from 'react';
import ReviewList from './ReviewList.jsx';

function Reviews(props) {
  return (
    <div style={{width: '60%', display: 'inline-block', verticalAlign: 'top'}}>
      <h3>X reviews, sorted by :relevance:</h3>
      <ReviewList/>
      <button style={{display: 'inline-block', margin: '10px'}}>More Reviews</button>
      <button style={{display: 'inline-block', margin: '10px'}}>Add a Review</button>
    </div>
  )
}

export default Reviews;