import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import server from '../../serverRequests.js';
import Thumbnail from './Thumbnail.jsx'

const OuterDiv = styled.div`
display: flex;
flex-direction: row;
`;

const ThumbnailList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Thumbnail1 = styled.img`
margin-bottom: 10px;
max-width: 60%;
max-height: 60%;
`;

const MainImage = styled.img`
max-width: 75%;
max-height: 75%;
`;

function ImageGallery (props) {
  // const [image, setImage] = useState();
  // const [defaultPhotos, setdefaultPhotos] = useState(null);
  // const [finished, setFinished] = useState(false);

  useEffect(() => {
    console.log('image gallery');
  //   var mainPhoto = '';
  //   if (props.prod) {
  //     server.get('/products/styles', {product_id: props.prod.id})
  //       .then((data)=> {
  //         var results = data.data.results;
  //         for (var i = 0; i < results.length; i++) {
  //           if (results[i]['default?'] === true) {
  //             mainPhoto = results[i].photos[0].url;
  //             setImage(mainPhoto);
  //             setdefaultPhotos(results[i].photos);
  //             console.log('set default to true default')
  //           }
  //         }
  //         if (mainPhoto === '') {
  //           mainPhoto = data.data.results[0].photos[0].url;
  //           setImage(mainPhoto);
  //           setdefaultPhotos(data.data.results[0].photos);
  //           setFinished(true);
  //           console.log('set default to first photo')
  //         }
  //         console.log('rendered photos');
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }
  }, [props.prod])

  // this temporarily shows the first 4 thumbnail images. I can't get the map function to work before it finishes rendering the photos

  if (props.photos) return (
    <OuterDiv>
      <ThumbnailList>
        {/* <Thumbnail1
          src={props.images.results[0].photos[0].thumbnail_url}>
        </Thumbnail1>
        <Thumbnail1
          src={props.images.results[0].photos[1].thumbnail_url}>
        </Thumbnail1> */}
        <Thumbnail url={props.photos[0].url}/>
        <Thumbnail url={props.photos[1].url}/>
        <Thumbnail url={props.photos[2].url}/>
        <Thumbnail url={props.photos[3].url}/>
        {props.photos.map((photo) => {
          <Thumbnail url={photo.url}/>
        })}
        {console.log(props.photos)}
      </ThumbnailList>
      <MainImage
        src={props.image}>
      </MainImage>
    </OuterDiv>
  )
}

export default ImageGallery;