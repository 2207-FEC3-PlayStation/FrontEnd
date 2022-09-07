import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import server from '../../serverRequests.js';
import Thumbnail from './Thumbnail.jsx';
import fullscreen from '../../assets/fullscreen.png';

const Carousel = styled.div`
background-color: #d9d5d5;
width: 760px;
height: 650px;
display: flex;
justify-content: flex-end;
align-items: center;
`
const Carousel2 = styled.div`
background-color: #d9d5d5;
width: 1200px;
height: 650px;
display: flex;
justify-content: center;
align-items: center;
z-index: 15;
overflow: hidden;
`

const Thumbnails = styled.div`
display: flex;
flex-direction: column;
left: -650px;
`

const ThumbnailList = styled.div`
display: flex;
flex-direction: column;
align-items: left;
margin-bottom: 0;
margin-left: 40px;
margin-top: 40px;
height: 500px;
overflow-y: hidden;
overflow-x: hidden;
position: absolute;
left: 5px;
scroll-behavior: smooth;
`;

const MainImage = styled.img`
display: block;
position: absolute;
width: 410px;
max-height: 540px;
margin-right: 98px;;
filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

const MainImage2 = styled.img`
display: block;
position: absolute;
max-width: 635px;
max-height: 650px;
/* margin-right: 30px; */
filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
z-index:19;
/* &:hover {
  transform: scale(1.5);
  } */
`;

const DownButton = styled.button`
left: 60px;
top: 640px;
position: absolute;
background: transparent;
border: none;
width: 50px;
font-size: 50px;
padding: 0px;
`

const UpButton = styled(DownButton)`
top: 140px;
left: 60px;
font-size: 50px;
position: absolute;
z-index: 15;
`

const LeftArrow = styled.button`
background: transparent;
position: relative;
left: -58%;
font-size: 40px;
border: none;
z-index: 15;
`
const RightArrow = styled(LeftArrow)`
background: transparent;
position: relative;
left: -1%;
`
const Button = styled.button`
  background: transparent url(${fullscreen}) no-repeat top;
  height: 30px;
  width: 30px;
  border: none;
  position: relative;
  top: -307px;;
  right: 2px;
`

function ImageGallery (props) {

  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);
  const [extendedView, setExtendedView] = useState(false);

  // add buttons to scroll through thumbnails
  function scrollUp () {
    const element = document.getElementById("ThumbnailList");
    element.scrollBy(0, -600);
    setHideR(false);
    setClickedR(false);
  }

  function scrollDown () {
    const element = document.getElementById("ThumbnailList");
    if (element.scrollTop === 0) {
      element.scrollBy(0, 600);
      setHideR(true);
      setClickedR(true);
    } else {
      setHideR(true);
    }
  }

  function extendView () {
    if (extendedView === false) {
      setExtendedView(true);
    } else {
      setExtendedView(false);
    }

  }

  if (props.photos) return (
    <React.Fragment>
      <Carousel>
      <LeftArrow onClick={props.leftClick}>←</LeftArrow>
      <MainImage
        src={props.image}>
      </MainImage>
      <RightArrow onClick={props.rightClick}>→</RightArrow>
      <Button onClick={extendView}></Button>
      {extendedView &&
      <Carousel2>
      <MainImage2  src={props.image}></MainImage2>
      </Carousel2>
      }
      </Carousel>
      <Thumbnails>
      <ThumbnailList id ="ThumbnailList">
        {props.photos.map((photo) => {
          return <Thumbnail key={photo.url} url={photo.url} handleImage={props.handleImage} changeStyle={props.changeStyle} mainUrl={props.image}/>
          photo
        })}
      </ThumbnailList>
      {clickedR && <UpButton onClick={() => scrollUp()}>ˆ</UpButton>}
      {!hideR && <DownButton onClick={() => scrollDown()}>ˬ</DownButton>}
      </Thumbnails>
      </React.Fragment>

  )
}

export default ImageGallery;