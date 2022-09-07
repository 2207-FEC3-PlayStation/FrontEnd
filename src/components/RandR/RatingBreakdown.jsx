import React, {useEffect, useState} from 'react';
import StarRating from './RatingBreakdown/StarRating.jsx';
import RatingsBar from './RatingBreakdown/RatingsBar.jsx';
import CharsBar from './RatingBreakdown/CharsBar.jsx';
import styled from 'styled-components';

const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
  flex-basis: 100%
`

const Overall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center-around;
`


function RatingBreakdown({update, reviews, avgRating, ratingToTenth, recommended, count}) {

  const [ratings, setRatings] = useState([]);
  const [ratingsVals, setRatingsVals] = useState([]);
  const [chars, setChars] = useState([]);
  const [charsVals, setCharsVals] = useState([]);

  useEffect(() => {
    if (reviews.ratings && reviews.characteristics) {
      setRatings(Object.keys(reviews.ratings).reverse())
      setRatingsVals(Object.values(reviews.ratings).reverse())
      setChars(Object.keys(reviews.characteristics))
      setCharsVals(Object.values(reviews.characteristics))
    }
  }, [reviews])

  return (
    <Ratings>
      <h3>Ratings and Reviews</h3>
      <Overall>
        <h1 data-testid="Review-Num" style={{marginRight: '30px'}}>{ratingToTenth}</h1>
        <StarRating  avgRating={avgRating}/>
      </Overall>
      <p style={{fontWeight: 'bold'}}>{count} total reviews</p>
      {ratings.map((star) => {
        return <RatingsBar update={update} key={star}starCount={star} totalReviews={count} thisRating={parseInt(ratingsVals[ratings.indexOf(star)])} />
      })}
      {chars.map((char) => {
        return <CharsBar key={char} char={char} thisRating={Number(charsVals[chars.indexOf(char)].value).toFixed(2)} />
      })}
      <p>{recommended}% of reviews recommend this product</p>
    </Ratings>
  )
}

export default RatingBreakdown;