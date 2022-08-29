import React from 'react'
import styled from 'styled-components'

const OuterDiv = styled.div`
margin-top: 40px;
`

const Style1 = styled.img`
border-radius: 50%;
margin-right: 10px;
width: 8%;
`
const Style2 = styled.img`
border-radius: 50%;
margin-right: 10px;
width: 8%;
`

const StyleSelected = styled.div`
margin-bottom: 10px;
`

const Styles = styled.div`
display: flex;
flex-direction: row;
`
const Line = styled.div`
background-color: black;
margin-top: 20px;
height: 1px;
width: 65%;
`

var StyleSelect = (props) => {//images={this.state.dummy}
  return (
    <OuterDiv>
      <StyleSelected>Style Selected > {props.images.results[0].name}</StyleSelected>
      <Styles>
        <Style1
          src={props.images.results[0].photos[0].thumbnail_url}>
        </Style1>
        <Style2
          src={props.images.results[1].photos[0].thumbnail_url}>
        </Style2>
      </Styles>
      <Line></Line>
    </OuterDiv>
  )
}

export default StyleSelect;