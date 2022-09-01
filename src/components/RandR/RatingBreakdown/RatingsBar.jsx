import React from 'react';
import styled from 'styled-components';

const StarLabel = styled.p`
  text-decoration: underline;
  `

function RatingsBar({starCount, totalReviews, thisRating}) {
  return (
    <React.Fragment>
      <StarLabel>{starCount + '-stars'}</StarLabel>
      <p>{thisRating}</p>
    </React.Fragment>
  )
}

export default RatingsBar;