import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%
`
const Box = styled.div`
  flex-basis: 15%;
`
const P = styled.div`
  font-size: 16px;
  margin: 5px 0;
`

function RateCharacteristics({char, updateChar, selected}) {

  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (char) {
      let selections;
      switch (char) {
        case 'Size':
          selections = ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too wide', 'None Selected'];
          break;
        case 'Width':
          selections = ['Too Narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide', 'None Selected'];
          break;
        case 'Comfort':
          selections = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect', 'None Selected'];
          break;
        case 'Quality':
          selections = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect', 'None Selected'];
          break;
        case 'Length':
          selections = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long', 'None Selected'];
          break;
        case 'Fit':
          selections = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long', 'None Selected'];
          break;
      }
      setSelection(selections);
    }
  }, [char])

  return (
    <React.Fragment>
      <Row style={{justifyContent: 'center'}}>
        <P style={{marginBottom: '2px', color: '#006FCD'}}>{selection[selected.value - 1]}</P>
      </Row>
      <Row>
        <Box>
          <P>{char}</P>
        </Box>
        <Box>
          <input style={{display: 'inline-block'}} type='radio' id={selection[0]} name={char} value={1} onClick={updateChar} required></input>
          <label htmlFor={selection[0]}></label>
        </Box>
        <Box>
          <input style={{display: 'inline-block'}} type='radio' id={selection[1]} name={char} value={2} onClick={updateChar}></input>
          <label htmlFor={selection[0]}></label>
        </Box>
        <Box>
          <input style={{display: 'inline-block'}} type='radio' id={selection[2]} name={char} value={3} onClick={updateChar}></input>
          <label htmlFor={selection[0]}></label>
        </Box>
        <Box>
          <input style={{display: 'inline-block'}} type='radio' id={selection[3]} name={char} value={4} onClick={updateChar}></input>
          <label htmlFor={selection[0]}></label>
        </Box>
        <Box>
          <input style={{display: 'inline-block'}} type='radio' id={selection[4]} name={char} value={5} onClick={updateChar}></input>
          <label htmlFor={selection[0]}></label>
        </Box>
      </Row>
    </React.Fragment>
  )
}

export default RateCharacteristics;