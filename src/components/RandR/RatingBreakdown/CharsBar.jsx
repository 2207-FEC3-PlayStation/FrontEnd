import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const CharsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
`

const CharLabel = styled.h6`
  display: flex;
  font-size: 10px;
  flex-basis: 10%
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
  flex-basis: 10px
`

const InnerBar = styled.div`
  display: flex;
  background: green;
  z-index: 10;
`
const Endpoints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 10px
`
const CharEndpoint = styled.h6`
  box-sizing: border-box;
  padding-left: 1px;
`

function CharsBar({char, thisRating}) {

const [endpoints, setEndpoints] = useState([]);

useEffect(() => {
  if (char) {
    if (char === 'Size' || char === 'Width' || char === length) {
      setEndpoints(["Too Small", "Perfect", "Too Big"]);
    } else if (char === 'Comfort' || char === 'Fit' || char === 'Quality') {
      setEndpoints(["Poor", "Great"])
    }
  }
}, [char])

  return (
    <CharsContainer>
      <CharLabel>{char}</CharLabel>
      <SliderHolder>
        <SubHolder>
          <OutterBar>
            <InnerBar style={{width: (100 * thisRating / 5)}}></InnerBar>
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