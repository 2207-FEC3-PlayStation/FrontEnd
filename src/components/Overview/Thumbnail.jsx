import React from 'react';
import styled from 'styled-components';

const Thumbnail1 = styled.img`
/* margin-top: 10px; */
max-width: 25%;
max-height: 40%;
margin: 10px;
z-index: 9991;
border: #302f2f 1px solid;
filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

function Thumbnail (props) {
  return(
    <Thumbnail1 src={props.url} onClick={props.handleImage}></Thumbnail1>
  )
}

export default Thumbnail;