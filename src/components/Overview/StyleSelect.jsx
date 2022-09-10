import React from 'react';
import styled from 'styled-components';
import checkmark from '../../assets/playstation.png'

const Style1 = styled.img`
  border-radius: 90%;
  margin-right: 10px;
  width: 70px;;
  height: 70px;
  border: none;
  margin: 10px 10px 10px 0px;
  position: relative;
  &:hover {
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    }
`
const Button = styled.button`
  border: none;
  background: transparent;
  padding: 0px;
  margin: 0px;
  position: relative;
`
var StyleSelect = (props) => {
  return (
    <Button onClick={(e) => {
      props.changeStyle(e);
      props.handleCheck(e);
    }} value={JSON.stringify(props.images)} checkID={props.currentStyle}>
    <img src={checkmark} className={
      props.checkedID === props.currentStyle.style_id ? 'check-circle active' : 'check-circle'
    }></img>
    <Style1 src={props.images.photos[0].thumbnail_url}></Style1>
    </Button>
  )
}

export default StyleSelect;
