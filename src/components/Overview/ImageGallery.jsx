import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import server from '../../serverRequests.js';
import Thumbnail from './Thumbnail.jsx';

const Carousel = styled.div`
background-color: #d9d5d5;
width: 620px;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
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
margin-left: 30px;
margin-top: 40px;
height: 500px;
overflow-y: hidden;
overflow-x: hidden;
position: relative;
left: -640px;
scroll-behavior: smooth;
`;

const MainImage = styled.img`
display: block;
position: absolute;
max-width: 530px;
max-height: 520px;
filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

const DownButton = styled.button`
left: 30px;
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
      <MainImage
        src={props.image}>
      </MainImage>
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