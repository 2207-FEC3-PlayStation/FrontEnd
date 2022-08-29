import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
display: flex;
flex-direction: row;
`;

const ThumbnailList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 25px;
`;
const Thumbnail1 = styled.img`
margin-bottom: 10px;
max-width: 25%;
max-height: 25%;
`;

const MainImage = styled.img`
max-width: 558px;
max-height: 837px;
`;

var ImageGallery = (props) => { //images={this.state.dummy}
  return (
    <OuterDiv>
      <ThumbnailList>
        <Thumbnail1
          src={props.images.results[0].photos[0].thumbnail_url}>
        </Thumbnail1>
        <Thumbnail1
          src={props.images.results[0].photos[1].thumbnail_url}>
        </Thumbnail1>
      </ThumbnailList>
      <MainImage
        src={props.images.results[0].photos[1].url}>
      </MainImage>
    </OuterDiv>
  )
}

export default ImageGallery;