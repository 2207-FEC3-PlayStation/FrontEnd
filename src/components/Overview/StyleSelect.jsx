import React from 'react';
import styled from 'styled-components';
import checkmark from '../../assets/checkmark.png'

const Style1 = styled.img`
border-radius: 90%;
margin-right: 10px;
width: 70px;;
height: 70px;
border: solid 1px black;
margin: 10px 10px 10px 0px;
position: relative;
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
    <Style1
      src={props.images.photos[0].thumbnail_url} >
    </Style1>
    </Button>
  )
}

export default StyleSelect;