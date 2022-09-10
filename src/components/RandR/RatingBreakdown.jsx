import React, { useEffect, useState } from 'react';
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


function RatingBreakdown({ update, filtersApplied, ratingFilter, reviews, avgRating, ratingToTenth, recommended, count }) {

  const [ratings, setRatings] = useState([]);
  const [ratingsVals, setRatingsVals] = useState([]);
  const [chars, setChars] = useState([]);
  const [charsVals, setCharsVals] = useState([]);
  const [filters, setFilters] = useState([]);

  //------------Use Effect------------

  useEffect(() => {
    if (reviews.ratings && reviews.characteristics) {
      setRatings(Object.keys(reviews.ratings).reverse())
      setRatingsVals(Object.values(reviews.ratings).reverse())
      setChars(Object.keys(reviews.characteristics))
      setCharsVals(Object.values(reviews.characteristics))
    }
  }, [reviews])

  useEffect(() => {
    if (ratingFilter) {
      setFilters(ratingFilter)
    }
  }, [ratingFilter])
  //------------Return------------
  return (
    <Ratings>
      <h4 style={{ margin: '5px 0' }}>RATINGS AND REVIEWS</h4>
      <Overall>
        <h1 data-testid="Review-Num" style={{ margin: '10px 30px 10px 0' }}>{ratingToTenth}</h1>
        <StarRating avgRating={avgRating} />
      </Overall>
      <p>{recommended}% of reviews recommend this product</p>
      <p style={{ fontWeight: 'bold', margin: '5px 0' }}>{count} total reviews</p>

      {/*RATINGS*/}
      {ratings.map((star) => {
        return <RatingsBar update={update} key={star} starCount={star} totalReviews={count} thisRating={parseInt(ratingsVals[ratings.indexOf(star)])} />
      })}
      <p style={{ display: `${filtersApplied}` }}>Reviews filtered for: {
        filters.map((filter) => { return filter + ' stars ' })}
      </p>

      {/*CHARACTERISTICS*/}
      {chars.map((char) => {
        return <CharsBar key={char} char={char} thisRating={Number(charsVals[chars.indexOf(char)].value).toFixed(2)} />
      })}
    </Ratings>
  )
}

export default RatingBreakdown;