import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const CharsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  box-sizing: border-box;
  margin-top: 10px;
`

const CharLabel = styled.h6`
  display: flex;
  font-size: 10px;
  flex-basis: 10%
  box-sizing: border-box;
  margin: 5px 0px 12px 0px
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
  background: gray;
  display: flex;
  justify-content: flex-start;
  flex-basis: 15%;
`

const Indicator = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  z-index: 10;
  box-sizing: border-box;
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
  margin-top: 5px
`

function CharsBar({char, thisRating}) {

const [endpoints, setEndpoints] = useState([]);
const [ratingWidth, setRatingWidth] =useState(0);

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
    setRatingWidth(((thisRating / 5) * 252).toFixed(1));
  }
}, [thisRating])



  return (
    <CharsContainer>
      <CharLabel>{char}</CharLabel>
      <SliderHolder>
        <SubHolder>
          <OutterBar>
            <div className='indicator'  style={{left: ratingWidth}}></div>

            {/* <Indicator className='indicator' style={{left: ratingWidth}}></Indicator> */}
          </OutterBar>
          <Endpoints>
            {endpoints.map((endpoint) => {
              return <CharEndpoint style={{fontWeight: 'normal'}} key={endpoint}>{endpoint}</CharEndpoint>
            })}
          </Endpoints>
        </SubHolder>
        <BarSpacer/>
      </SliderHolder>
    </CharsContainer>
  )
}

export default CharsBar;