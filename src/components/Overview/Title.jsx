import React from 'react'
import styled from 'styled-components';
import search from '../../assets/search.png';

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
color: white;
`

const SearchBar = styled.input`
background: transparent;
border: none;
border-bottom: 2px solid white;
color: white;
`

const Img = styled.img`
padding: 10px;
max-width: 30%;
max-height: 30%;
`


var Title = (props) => {
  return (
    <Header>
      <Titled><u><em>FEC</em></u></Titled>
        <SearchBar></SearchBar>
        <Img src={search}></Img>
    </Header>
  )
}

export default Title;