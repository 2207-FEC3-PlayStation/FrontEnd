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


function RateCharacteristics({char}) {

  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (char) {
      let selections;
      switch (char) {
        case 'Size':
          selections = ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too wide'];
          break;
        case 'Width':
          selections = ['Too Narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
          break;
        case 'Comfort':
          selections = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
          break;
        case 'Quality':
          selections = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
          break;
        case 'Length':
          selections = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
          break;
        case 'Fit':
          selections = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];
          break;
      }
      setSelection(selections);
    }
  }, [char])

  return (
    <Row>
      <Box>
        <p>{char}</p>
      </Box>
      <Box>
      <input style={{display: 'inline-block'}} type='radio' id={selection[0]} name={char} value='yes'></input>
      <label htmlFor={selection[0]}></label>
      </Box>
      <Box>
      <input style={{display: 'inline-block'}} type='radio' id={selection[1]} name={char} value='yes'></input>
      <label htmlFor={selection[0]}></label>
      </Box>
      <Box>
      <input style={{display: 'inline-block'}} type='radio' id={selection[2]} name={char} value='yes'></input>
      <label htmlFor={selection[0]}></label>
      </Box>
      <Box>
      <input style={{display: 'inline-block'}} type='radio' id={selection[3]} name={char} value='yes'></input>
      <label htmlFor={selection[0]}></label>
      </Box>
      <Box>
      <input style={{display: 'inline-block'}} type='radio' id={selection[4]} name={char} value='yes'></input>
      <label htmlFor={selection[0]}></label>
      </Box>
    </Row>
  )
}

export default RateCharacteristics;