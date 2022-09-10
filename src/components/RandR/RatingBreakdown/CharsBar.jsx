import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const CharsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100px;
  box-sizing: border-box;
`
const CharLabel = styled.h6`
  display: flex;
  font-size: 12px;
  flex-basis: 10%
  box-sizing: border-box;
  margin: 5px 0px 0px 0px;
  color: #006FCD
`
const SliderHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 90%
`
const BarSpacer = styled.div`
  flex-basis: 10%
`
const SubHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 90%
`
const OutterBar = styled.div`
  background: #8a8a8a;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  flex-basis: 8px
`
const Indicator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-basis: 16px;
  box-sizing: border-box;
  width: 100%;
`
const Endpoints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  flex-basis: 12px;
`
const CharEndpoint = styled.h6`
  box-sizing: border-box;
  height: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #006FCD
`

function CharsBar({ char, thisRating }) {

  const [endpoints, setEndpoints] = useState([]);
  const [ratingWidth, setRatingWidth] = useState(0);

  //------------Use Effect------------

  useEffect(() => {
    if (char) {
      if (char === 'Size' || char === 'Width' || char === length) {
        setEndpoints(["Too Small", "Perfect", "Too Big"]);
      } else if (char === 'Comfort' || char === 'Fit' || char === 'Quality') {
        setEndpoints(["Poor", "Great"])
      }
    }
  }, [char])

  useEffect(() => {
    if (thisRating) {
      //252 is the width of the bar
      setRatingWidth(((thisRating / 5) * 100).toFixed(1) + '%');
    }
  }, [thisRating])

  //------------Return------------

  return (
    <CharsContainer>
      <SliderHolder>
        <SubHolder>
          <Indicator> {/*i.e. checkmark*/}
            <CharLabel style={{ flexBasis: `${ratingWidth}` }}>{char}</CharLabel>
            <div className='checkMark'></div>
          </Indicator>
          <OutterBar>
          </OutterBar>
          <Endpoints>
            {endpoints.map((endpoint) => {
              return <CharEndpoint style={{ fontWeight: 'normal' }} key={endpoint}>{endpoint}</CharEndpoint>
            })}
          </Endpoints>
        </SubHolder>
        <BarSpacer /> {/*Adds spacing between Ratings and Reviews */}
      </SliderHolder>
    </CharsContainer>
  )
}

export default CharsBar;