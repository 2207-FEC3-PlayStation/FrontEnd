import React from 'react';
import styled from 'styled-components';

function Thumbnail (props) {
  return(
    <img className={
      props.url === props.mainUrl ? 'thumbnail-active' : 'thumbnail'
    } src={props.url} onClick={(e) => {
      props.handleImage(e)}} alt={props.index}></img>
    )
}

export default Thumbnail;
