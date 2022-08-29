import React from 'react'
import styled from 'styled-components';
import bag from '../../assets/bag.png';

const Header = styled.header`
position: fixed;
top: 0px;
left: 0px;
display: flex;
align-items: center;
width: 100%;
height: 70px;
background-color: #ffe6b8;
`

const Titled = styled.h1`
margin-left: 5px;
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
        <Titled>FEC</Titled>
          <SearchBar placeholder='Search...'></SearchBar>
          <BagImage src={bag}></BagImage>
    </Header>
  )
}

export default Title;