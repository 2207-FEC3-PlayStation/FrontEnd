import React from 'react'
import styled from 'styled-components';
import search from '../../assets/search.png';
import logo from '../../assets/playstation.png';

const Header = styled.header`
top: 0px;
left: 0px;
display: flex;
align-items: center;
width: 100%;
height: 70px;
z-index: 15;
/* background-color: #44423f; */
background-color: #006FCD;
border-radius: 10px;
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
      <Titled><img src={logo}></img><em>PlayStation</em></Titled>
        <SearchBar></SearchBar>
        <Img src={search}></Img>
    </Header>
  )
}

export default Title;