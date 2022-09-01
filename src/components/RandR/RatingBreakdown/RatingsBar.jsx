import React from 'react';
import styled from 'styled-components';

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 20%
`

const StarLabel = styled.p`
  text-decoration: underline;
  display: flex;
`
const OutterBar = styled.div`
  background: gray;
  display: flex;
  justify-content: flex-start;
  flex-basis: 40%;
  margin: 8%
`

const InnerBar = styled.div`
  display: flex;
  background: green;
  z-index: 10;
`

const ReviewCount = styled.p`
  display: flex;
  font-size: 10px;
  align-items: center;
  justifiy-content: flex-start
`

function RatingsBar({starCount, totalReviews, thisRating}) {
  return (
    <RatingsContainer>
      <StarLabel>{starCount + '-stars'}</StarLabel>
      <OutterBar>
        <InnerBar style={{width: (100 * thisRating / totalReviews) + '%'}}></InnerBar>
      </OutterBar>
      <ReviewCount>{thisRating + ((thisRating === 1) ? ' review' : ' reviews')}</ReviewCount>
    </RatingsContainer>
  )
}

export default RatingsBar;