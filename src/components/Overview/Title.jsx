import React from 'react';
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
  background-color: #006FCD;
  border-radius: 10px;
`
const Titled = styled.h1`
  margin-left: 30px;
  flex-grow: 1;
  color: white;
`
const SearchBar = styled.input`
  background: #eceaea ;
  border-radius: 5px;
  border: #eceaea 2px solid;
  color: black;
`
const Img = styled.img`
  padding: 10px;
  max-width: 30%;
  max-height: 30%;
`
function switchMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var Title = (props) => {
  return (
    <Header>
      <Titled><img src={logo}></img><em>PlayStation</em></Titled>
        <SearchBar></SearchBar>
        <Img src={search}></Img>
        <label className="switch" style={{'marginRight': '10px'}} >
          <input type="checkbox" onChange={switchMode}/>
          <span className="slider round"></span>
        </label>
    </Header>
  )
}

export default Title;
