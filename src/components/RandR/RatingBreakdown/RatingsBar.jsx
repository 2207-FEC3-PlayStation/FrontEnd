import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  margin: 3px 0;
  border-radius: 5px;
`
const StarLabel = styled.p`
  text-decoration: underline;
  display: flex;
  flex-basis: 20%;
  margin: 8px 0 8px;
`
const BarHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
`
const BarSpacer = styled.div`
flex-basis: 42.5%
`
const OutterBar = styled.div`
  background: #8a8a8a;
  display: flex;
  justify-content: flex-start;
  flex-basis: 8px;
`
const InnerBar = styled.div`
  display: flex;
  background: #006FCD;
  z-index: 1;
`
const ReviewCount = styled.p`
  display: flex;
  font-size: 10px;
  align-items: center;
  box-sizing: border-box;
  padding-left: 5px;
`

function RatingsBar({update, starCount, totalReviews, thisRating}) {

  const [backgroundColor, setBackgroundColor] = useState('transparent')

//------------Event Handler------------

  let clickedRating = () => {
    update(parseInt(starCount));
    if (backgroundColor === 'transparent') {
      setBackgroundColor('#d9d5d5')
    } else {
      setBackgroundColor('transparent');
    }
  }

  //------------Return------------

  return (
    <RatingsContainer onClick={clickedRating} style={{backgroundColor: `${backgroundColor}`}}>
      <StarLabel>{starCount + ((starCount === '1') ? '-star': '-stars')}</StarLabel>
      <BarHolder>
        <OutterBar>
          <InnerBar style={{width: (100 * thisRating / totalReviews) + '%'}}></InnerBar>
        </OutterBar>
      </BarHolder>
      <ReviewCount>{thisRating + ((thisRating === 1) ? ' review' : ' reviews')}</ReviewCount>
    </RatingsContainer>
  )
}

export default RatingsBar;