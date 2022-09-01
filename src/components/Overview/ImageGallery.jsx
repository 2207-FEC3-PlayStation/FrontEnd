import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import server from '../../serverRequests.js';
import Thumbnail from './Thumbnail.jsx'

const ThumbnailList = styled.div`
display: flex;
flex-direction: column;
align-items: left;
margin-top: 30px;
margin-bottom: 0;
margin-left: 30px;
height: 500px;
overflow-y: hidden;
overflow-x: hidden;
position: relative;
`;

const MainImage = styled.img`
display: block;
position: absolute;
max-width: 530px;
max-height: 520px;
padding-top: 30px;
padding-left: 30px;
`;

// add buttons to scroll through thumbnails
// need to work on CSS for main image to size it correctly

function ImageGallery (props) {
  if (props.photos) return (
    <React.Fragment>
      <ThumbnailList>
        {props.photos.map((photo) => {
          return <Thumbnail key={photo.url} url={photo.url}/>
          photo
        })}
      </ThumbnailList>
      <MainImage
        src={props.image}>
      </MainImage>
      </React.Fragment>
  )
}

export default ImageGallery;