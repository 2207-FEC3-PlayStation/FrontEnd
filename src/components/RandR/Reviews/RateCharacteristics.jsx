import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function RateCharacteristics(props) {

  return (
    <div>

      <input style={{display: 'inline-block'}} type='radio' id='test' name='recommend' value='yes'></input>
      <label htmlFor='test'>Test</label>
    </div>
  )
}

export default RateCharacteristics;