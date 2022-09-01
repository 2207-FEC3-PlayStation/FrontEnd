import React from 'react';
import styled from 'styled-components';


const CharsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 75%
`

const CharLabel = styled.p`
  display: flex;
  font-size: 10px;
`

const OutterBar = styled.div`
  background: gray;
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  margin: 6%
`

const InnerBar = styled.div`
  display: flex;
  background: green;
  z-index: 10;
  width: 50%
`
function CharsBar({char, thisRating}) {

  return (
    <CharsContainer>
      <CharLabel>{char}</CharLabel>
      <OutterBar>
        <InnerBar></InnerBar>
      </OutterBar>
    </CharsContainer>
  )
}

export default CharsBar;