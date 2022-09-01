import React from 'react';
import styled from 'styled-components';

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`

const StarLabel = styled.p`
  text-decoration: underline;
  display: flex;
  flex-grow: 1;
`
const OutterBar = styled.div`
  background: gray;
  display: flex;
  justify-content: flex-start;
  flex-basis: 40%;
  margin: 8%;
`

const InnerBar = styled.div`
  display: flex;
  background: green;
  z-index: 10;
`

const ReviewCount = styled.p`
  display: flex;
  flex-grow: 1;
  font-size: 10px;
  align-items: center;
`

function RatingsBar({starCount, totalReviews, thisRating}) {
  return (
    <RatingsContainer>
      <StarLabel>{starCount + '-stars'}</StarLabel>
      <OutterBar>
        <InnerBar style={{width: (100 * thisRating / totalReviews) + '%'}}></InnerBar>
      </OutterBar>
      <ReviewCount>{thisRating + ' reviews'}</ReviewCount>
    </RatingsContainer>
  )
}

export default RatingsBar;