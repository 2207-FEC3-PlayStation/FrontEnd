import React from 'react';
import ReviewTile from './ReviewTile.jsx';

function ReviewList({reviews}) {

  if(!reviews) {
    reviews = [];
  }

  return (
    <React.Fragment>
      {reviews.map((review) => {
        return <ReviewTile key={review.review_id} data={review} />
      })}
    </React.Fragment>
  )
}

export default ReviewList;