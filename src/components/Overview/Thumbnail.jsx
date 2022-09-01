import React from 'react';
import styled from 'styled-components';

const Thumbnail1 = styled.img`
margin-bottom: 10px;
max-width: 60%;
max-height: 60%;
`;

function Thumbnail (props) {
  return(
    <Thumbnail1 src={props.url}></Thumbnail1>
  )
}

export default Thumbnail;