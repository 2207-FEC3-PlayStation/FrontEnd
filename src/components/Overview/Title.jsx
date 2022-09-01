import React from 'react'
import styled from 'styled-components';
import bag from '../../assets/bag.png';

const Header = styled.header`
top: 0px;
left: 0px;
display: flex;
align-items: center;
width: 100%;
height: 70px;
z-index: 9999;
background-color: #ffe6b8;
`

const Titled = styled.h1`
margin-left: 30px;
flex-grow: 1;
font-family: cursive;
color: white;
`

const SearchBar = styled.input`
`

const BagImage = styled.img`
max-width: 50%;
max-height: 50%;
`


var Title = (props) => {
  return (
    <Header>
      <Titled><u>FEC</u></Titled>
        <SearchBar placeholder='Search...'></SearchBar>
        <BagImage src={bag}></BagImage>
    </Header>
  )
}

export default Title;