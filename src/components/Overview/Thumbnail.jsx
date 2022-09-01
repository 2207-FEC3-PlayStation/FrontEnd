import React from 'react';
import styled from 'styled-components';

const Thumbnail1 = styled.img`
margin-top: 30px;
margin-bottom: 10px;
max-width: 35%;
max-height: 30%;
margin: 15px;
z-index: 9991;
`;

function Thumbnail (props) {
  return(
    <Thumbnail1 src={props.url}></Thumbnail1>
  )
}

export default Thumbnail;