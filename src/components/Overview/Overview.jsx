import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelect from './StyleSelect.jsx';
import CheckOut from './CheckOut.jsx';
import Title from './Title.jsx';
import axios from 'axios';
import styled from 'styled-components';
import server from '../../serverRequests.js';

const Top = styled.div`
max-width: 1200;
`
const Announce = styled.div`
text-align: center;
padding: 20px;
`

const FlexContainer = styled.div`
background-color: #d4b37711;
display: flex;
flex-direction: row;
margin-bottom: 0;
justify-content: flex-start;
width: 1200px;
`;

const ProdInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-right: 0px;
margin-top: 30px;
position: absolute;
left: 750px;
word-wrap: break-word;
width: 420px;
padding-left: 40px;
`;

const ProdDet = styled.div`
background-color: #d4b37711;
display: flex;
flex-direction: row;
margin: 0px;
/* padding-top: 40px; */
justify-content: flex-start;
`;

const ProdDescr = styled.div`
padding: 10px;
padding-left: 30px;
margin-top: 90px;
margin-bottom: 30px;
width: 60%;
`;

const ProdChar = styled.div`
padding: 10px;
margin-top: 90px;
margin-bottom: 30px;
padding-left: 30px;
border-left: 3px solid grey;
`

const StyleSelected = styled.div`
margin-top: 15px;
margin-bottom: 15px;
`

const Styles = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
max-width: 290px;
`


function Overview (props) {
  const [image, setImage] = useState();
  const [defaultPhotos, setdefaultPhotos] = useState(null);
  const [finished, setFinished] = useState(false);
  const [styles, setStyles] = useState(false);
  const [currentStyle, setCurrentStyle] = useState({});
  const [counter, setCounter] = useState(1);

  // gets the related styles and sets the main photo as the default style's first photo
  // if there is no default photo, it sets the main photo as the first style's first photo

  useEffect(() => {
    var mainPhoto = '';
    if (props.prod) {
      server.get('/products/styles', {product_id: props.prod.id})
        .then((data)=> {
          var results = data.data.results;
          setStyles(results);
          setCurrentStyle(results[0]);
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
            setFinished(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [props.prod, finished])

  function handleImage(e) {
    setImage(e.target.src);
  }

  function changeStyle(e) {
    var style = JSON.parse(e.currentTarget.value)
    setImage(style.photos[0].url);
    setdefaultPhotos(style.photos);
    setCurrentStyle(style);
  }

  function leftClick() {
    console.log(counter);
    if (counter < 1) {
      setCounter(counter => defaultPhotos.length)
    }
    setCounter(counter => counter - 1);
    setImage(defaultPhotos[counter].url);
  }

  function rightClick() {
    console.log(counter);
    if (counter > defaultPhotos.length-2) {
      setCounter(-1);
    }
    setCounter(counter => counter + 1);
    setImage(defaultPhotos[counter].url);
  }

  return (
  <Top>
    <Title />
    <Announce><em>SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></em></Announce>
    <FlexContainer>
      <ImageGallery prod={props.prod} photos={defaultPhotos} image={image} handleImage={handleImage} leftClick={leftClick} rightClick={rightClick}/>
      <ProdInfo>
        {props.prod && <ProductInfo info={props.prod} avgRating={props.avgRating}/>}
        {styles && currentStyle &&
        <React.Fragment>
        <StyleSelected><strong>STYLE > </strong>{currentStyle.name}</StyleSelected>
        <Styles>
        {styles.map((style, index) => (<StyleSelect currentStyle={currentStyle} images={style} key={index} changeStyle={changeStyle}/>))}
        </Styles>
        </React.Fragment>}
        <CheckOut />
      </ProdInfo>
    </FlexContainer>
    {props.prod && <ProdDet>
      <ProdDescr>
        <h4>Description</h4>
        <p>{props.prod.description}</p>
      </ProdDescr>
      <ProdChar>
        <h4>Features</h4>
        {props.prod.features.map((feature) => {
          return <React.Fragment key={feature.value}><span>✓ {feature.value} {feature.feature}</span><br></br></React.Fragment>
        })}
      </ProdChar>
    </ProdDet>}
  </Top>
  )
}

export default Overview;


