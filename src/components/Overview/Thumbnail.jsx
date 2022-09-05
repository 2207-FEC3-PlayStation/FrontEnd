import React from 'react';
import styled from 'styled-components';

const Thumbnail1 = styled.img`
margin-top: 30px;
max-width: 20%;
max-height: 35%;
margin: 15px;
z-index: 9991;
border: #302f2f 1px solid;
`;

function Thumbnail (props) {
  return(
    <Thumbnail1 src={props.url}></Thumbnail1>
  )
}

export default Thumbnail;