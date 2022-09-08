import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import server from '../../serverRequests.js';
import Thumbnail from './Thumbnail.jsx';
import fullscreen from '../../assets/fullscreen.png';
// import ReactImageMagnify from 'react-image-magnify';

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

const DownButton = styled.button`
left: 60px;
top: 670px;
position: absolute;
background: transparent;
border: none;
width: 50px;
font-size: 50px;
padding: 0px;
z-index: 30;
&:hover {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`

const UpButton = styled(DownButton)`
top: 140px;
left: 60px;
font-size: 50px;
position: absolute;
&:hover {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`

const LeftArrow = styled.button`
background: transparent;
position: relative;
left: -69%;
font-size: 40px;
border: none;
z-index: 15;
&:hover {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`
const RightArrow = styled(LeftArrow)`
background: transparent;
position: relative;
left: -1%;
&:hover {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`
const Button = styled.button`
  background: transparent url(${fullscreen}) no-repeat top;
  height: 30px;
  width: 30px;
  border: none;
  position: relative;
  top: -307px;;
  right: 2px;
  &:hover {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`

function ImageGallery (props) {

  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);
  const [extendedView, setExtendedView] = useState(false);

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
      <div className={
        extendedView ? 'extended-carousel' : 'carousel'
      }>
      {props.counter>1 && <button className={
        extendedView? 'left-arrow-ext' : 'left-arrow'
      } onClick={props.leftClick}>←</button>}
      <div className={
        extendedView? 'wrapper-ext' : 'wrapper'
      }>
      {/* {!extendedView && <img className={
      extendedView ? 'main-imageExtended' : 'main-image'
    }
      src={props.image} onClick={extendView}>
    </img>}
      {extendedView && <ReactImageMagnify  {...{
        smallImage: {
          alt: 'main product image',
          ifFluidWidth: true,
          src: `${props.image}`
        },
        largeImage:{
          src: props.image,
          width: 1650,
          height: 1100
        }
      }}    />} */}
      <img className={
        extendedView ? 'main-imageExtended' : 'main-image'
      }
        src={props.image} onClick={extendView}>
      </img>
      </div>
      <RightArrow onClick={props.rightClick}>→</RightArrow>
      <Button onClick={extendView}></Button>
      </div>
      <Thumbnails>
      <ThumbnailList id ="ThumbnailList">
        {props.photos.map((photo, index) => {
          return <Thumbnail key={index} url={photo.url} handleImage={props.handleImage} changeStyle={props.changeStyle} mainUrl={props.image} index={index}/>
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