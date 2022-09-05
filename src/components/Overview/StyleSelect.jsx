import React from 'react'
import styled from 'styled-components'

const Style1 = styled.img`
border-radius: 90%;
margin-right: 10px;
width: 70px;;
height: 70px;
border: solid 1px black;
margin: 10px 20px 10px 0px;
`

const Button = styled.button`
border: none;
background: transparent;
padding: 0px;
margin: 0px;
`

var StyleSelect = (props) => {
  return (
    <Button onClick={props.changeStyle} value={JSON.stringify(props.images)}>
    <Style1
      src={props.images.photos[0].thumbnail_url} >
    </Style1>
    </Button>
  )
}

export default StyleSelect;