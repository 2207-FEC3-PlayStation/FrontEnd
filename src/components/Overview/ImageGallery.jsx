import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import server from '../../serverRequests.js';
import Thumbnail from './Thumbnail.jsx';

const Carousel = styled.div`
background-color: #d9d5d5;
width: 770px;
height: 600px;
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 50px;
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
margin-left: 10px;
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
max-width: 460px;
max-height: 540px;
margin-right: 90px;;
filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

const DownButton = styled.button`
left: 25px;
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
left: 30px;
font-size: 50px;
position: absolute;
z-index: 9999;
`

const LeftArrow = styled.button`
background: transparent;
position: relative;
left: -520px;
font-size: 40px;
border: none;
`
const RightArrow = styled(LeftArrow)`
background: transparent;
position: relative;
left: -13px;
`

function ImageGallery (props) {

  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);

  // add buttons to scroll through thumbnails
  function scrollUp () {
    const element = document.getElementById("ThumbnailList");
    element.scrollBy(0, -600);
    setHideR(false);
    setClickedR(false);
  }

  function scrollDown () {
    const element = document.getElementById("ThumbnailList");
    console.log(element.scrollTop);
    if (element.scrollTop === 0) {
      element.scrollBy(0, 600);
      setHideR(true);
      setClickedR(true);
    } else {
      setHideR(true);
    }
  }

  if (props.photos) return (
    <React.Fragment>
      <Carousel>
      <LeftArrow>←</LeftArrow>
      <MainImage
        src={props.image}>
      </MainImage>
      <RightArrow>→</RightArrow>
      </Carousel>
      <Thumbnails>
      <ThumbnailList id ="ThumbnailList">
        {props.photos.map((photo) => {
          return <Thumbnail key={photo.url} url={photo.url} handleImage={props.handleImage}/>
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