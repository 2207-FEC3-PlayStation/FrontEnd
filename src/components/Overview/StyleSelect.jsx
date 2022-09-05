import React from 'react'
import styled from 'styled-components'

const Style1 = styled.img`
border-radius: 90%;
margin-right: 10px;
width: 70px;;
height: 70px;
border: solid 1px black;
margin: 10px 20px 10px 0px;;
`

var StyleSelect = (props) => {
  return (
    <Style1
      src={props.images.photos[0].thumbnail_url}>
    </Style1>
  )
}

export default StyleSelect;