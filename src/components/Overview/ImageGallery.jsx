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
  const [image, setImage] = useState();
  const [defaultPhotos, setdefaultPhotos] = useState(null);

  useEffect(() => {
    var mainPhoto = '';
    if (props.prod) {
      server.get('/products/styles', {product_id: props.prod.id})
        .then((data)=> {
          var results = data.data.results;
          for (var i = 0; i < results.length; i++) {
            if (results[i]['default?'] === true) {
              mainPhoto = results[i].photos[0].url;
              setImage(mainPhoto);
              setdefaultPhotos(results[i].photos);
            }
          }
          if (mainPhoto === '') {
            mainPhoto = data.data.results[0].photos[0].url;
            setImage(mainPhoto);
            setdefaultPhotos(data.data.results[0].photos);
          }
          console.log('rendered photos');
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [props.prod])

  return (
    <OuterDiv>
      {defaultPhotos && <ThumbnailList>
        <Thumbnail1
          src={props.images.results[0].photos[0].thumbnail_url}>
        </Thumbnail1>
        <Thumbnail1
          src={props.images.results[0].photos[1].thumbnail_url}>
        </Thumbnail1>
        <Thumbnail url={defaultPhotos[0].url}/>

      </ThumbnailList>}
      <MainImage
        src={image}>
      </MainImage>
    </OuterDiv>
  )
}

export default ImageGallery;