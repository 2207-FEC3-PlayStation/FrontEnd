import React, {useEffect, useState} from 'react';
import StarRating from './RatingBreakdown/StarRating.jsx';
import RatingsBar from './RatingBreakdown/RatingsBar.jsx';
import CharsBreakdown from './RatingBreakdown/CharsBreakdown.jsx';

function RatingBreakdown({reviews, avgRating, ratingToTenth, recommended, count}) {

  const [ratings, setRatings] = useState([]);
  const [ratingsVals, setRatingsVals] = useState([]);

  useEffect(() => {
    if (reviews.ratings) {
      setRatings(Object.keys(reviews.ratings))
      setRatingsVals(Object.values(reviews.ratings))
    }
  }, [reviews])

  return (
    <div style={{width: "28%", display: 'inline-block', verticalAlign: 'top', marginLeft: '2%'}}>
      <h3>Ratings and Reviews</h3>
      <h1 data-testid="Review-Num" style={{display: 'inline-block', verticalAlign: 'top'}}>{ratingToTenth}</h1>
      <StarRating avgRating={avgRating}/>
      <p style={{fontWeight: 'bold'}}>{count} total reviews</p>
      <p>{recommended}% of reviews recommend this product</p>
      {ratings.map((star) => {
        return <RatingsBar key={star}starCount={star} totalReviews={count} thisRating={ratingsVals[ratings.indexOf(star)]} />
      })}
      <CharsBreakdown/>
    </div>
  )
}

export default RatingBreakdown;