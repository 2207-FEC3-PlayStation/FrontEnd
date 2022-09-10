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
  width: 420px;
  padding-left: 60px;
`;

const ProdDet = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  justify-content: flex-start;
`;

const ProdDescr = styled.div`
  padding: 10px;
  padding-left: 120px;
  margin-top: 100px;
  margin-bottom: 30px;
  width: 55%;
`;

const ProdChar = styled.div`
  padding: 10px;
  margin-top: 100px;
  margin-bottom: 30px;
  padding-left: 30px;
  border-left: 3px solid grey;
`
const StyleSelected = styled.div`
  margin-top: 15px;
  margin-bottom: 13px;
`
const Styles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 360px;
`
function Overview (props) {
  const [image, setImage] = useState();
  const [defaultPhotos, setdefaultPhotos] = useState(null);
  const [finished, setFinished] = useState(false);
  const [styles, setStyles] = useState(false);
  const [currentStyle, setCurrentStyle] = useState({});
  const [counter, setCounter] = useState(1);
  const [sizes, setSizes] = useState([]);
  const [maxQuantity, setmaxQuantity] = useState([]);
  const [checked, setChecked] = useState(true);
  const [checkedID, setCheckedID] = useState();
  const [skus, setSkus] = useState();
  const [size, setSize] = useState();
  const [sku, setSku] = useState();
  const [sizeSelected, setSizeSelected] = useState(false);
  const [price, setPrice] = useState();
  const [saleprice, setSalePrice] = useState();
  const [onSale, setOnSale] = useState(false);
  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);

  // gets the related styles and sets the main photo as the default style's first photo
  // if there is no default photo, it sets the main photo as the first style's first photo

  useEffect(() => {
    var mainPhoto = '';
    if (props.prod) {
      server.get('/products/styles', {product_id: props.prod.id})
        .then((data)=> {
          var results = data.data.results;
          setStyles(results);
          var array = [];
          for (var sku in results[0].skus) {
            array.push(results[0].skus[sku].size)
          }
          setSizes(array);
          setmaxQuantity([]);
          setSkus(results[0].skus);
          for (var i = 0; i < results.length; i++) {
            if (results[i]['default?'] === true) {
              mainPhoto = results[i].photos[0].url;
              setImage(mainPhoto);
              setdefaultPhotos(results[i].photos);
              setCurrentStyle(results[i]);
              if (results[i].sale_price === null) {
                setPrice(results[i].original_price);
                setSalePrice();
              } else {
                setPrice(results[i].original_price);
                setSalePrice(results[i].sale_price);
                setOnSale(true);
              }
            }
          }
          if (mainPhoto === '') {
            mainPhoto = data.data.results[0].photos[0].url;
            setImage(mainPhoto);
            setdefaultPhotos(data.data.results[0].photos);
            setFinished(true);
            setCurrentStyle(results[0]);
            if (results[0].sale_price === null) {
              setPrice(results[0].original_price);
              setSalePrice();
            } else {
              setPrice(results[0].original_price);
              setSalePrice(results[0].sale_price);
              setOnSale(true);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [props.prod, finished])

  useEffect(() => {
    setCheckedID(currentStyle.style_id);
  }, [currentStyle])

  function handleImage(e) {
    setImage(defaultPhotos[e.target.alt].url);
  }

  function changeStyle(e) {
    var style = JSON.parse(e.currentTarget.value);
    setImage(style.photos[0].url);
    setdefaultPhotos(style.photos);
    setCurrentStyle(style);
    setSkus(style.skus);
    if (style.sale_price === null) {
      setPrice(style.original_price);
      setSalePrice();
      setOnSale(false);
    } else {
      setPrice(style.original_price);
      setSalePrice(style.sale_price);
      setOnSale(true);
    }
    var array = [];
    for (var sku in style.skus) {
        array.push(style.skus[sku].size)
    }
    if (array.length === 0) {
      array.push('OUT OF STOCK')
    }
    setSizes(array);
  }

  function changeQuantity(e) {
    setSizeSelected(true);
    var size = e.currentTarget.value;
    setSize(size);
    var max = 0;
    var currentSku = '';
    for (var sku in skus) {
      if(skus[sku]['size'] === size) {
        max = skus[sku].quantity
        currentSku = sku;
      }
    }
    if (max > 15) {
      max = 15;
    }
    setmaxQuantity(Array.from({length: max}, (_, i) => i + 1))
    setSku(currentSku);
  }

  function scrollUp () {
    const element = document.getElementById("ThumbnailList");
    element.scrollBy(0, -600);
    setHideR(false);
    setClickedR(false);
  }

  function leftClick() {
    if (counter < 1) {
      setCounter(counter => defaultPhotos.length)
    }
    setCounter(counter => counter - 1);
    setImage(defaultPhotos[counter].url);
    if (counter > 5) {
      scrollUp();
    }
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

  function rightClick() {
    if (counter > defaultPhotos.length-2) {
      setCounter(-1);
    }
    setCounter(counter => counter + 1);
    setImage(defaultPhotos[counter].url);
    if (counter > 5) {
      scrollDown();
    }
  }

  function handleCheck(e) {
    var style = JSON.parse(e.currentTarget.value);
    setCheckedID(style.style_id)
  }

  // found out this method with js is now deprecated and doesn't work with chrome. might have to use jquery for this
  // doesn't specify quantity correctly yet
  function handleAdd() {
    var body = {"sku_id": sku}
    if (size && sku) {
      server.post('/cart', body)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  return (

  <Top>
    <Title />
    <Announce><strong><em>SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE / DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</em></strong></Announce>
    <FlexContainer>
      <ImageGallery prod={props.prod} photos={defaultPhotos} image={image} handleImage={handleImage} leftClick={leftClick} rightClick={rightClick} counter={counter}/>
      <ProdInfo>
        {props.prod && <ProductInfo info={props.prod} avgRating={props.avgRating} numReviews={props.numReviews} price={price} saleprice={saleprice} onSale={onSale}/>}
        {styles && currentStyle &&
        <React.Fragment>
        <StyleSelected><strong>STYLE > </strong>{currentStyle.name}</StyleSelected>
        <Styles>
        {styles.map((style, index) => (<StyleSelect checked={checked} handleCheck={handleCheck} currentStyle={currentStyle} images={style} key={index} changeStyle={changeStyle} prod={props.prod} checkedID={style.style_id}/>))}
        </Styles>
        </React.Fragment>}
        <CheckOut sizes={sizes} maxQuantity={maxQuantity} changeQuantity={changeQuantity} handleAdd={handleAdd} sizeSelected={sizeSelected}/>
      </ProdInfo>
    </FlexContainer>
    {props.prod && <ProdDet>
      <ProdDescr>
        <h4>DESCRIPTION</h4>
        <p>{props.prod.description}</p>
      </ProdDescr>
      <ProdChar>
        <h4>FEATURES</h4>
        {props.prod.features.map((feature) => {
          return <React.Fragment key={feature.value}><span>✓ {feature.value.replace(/[A-Z]/g, ' $&').trim()} {feature.feature}</span><br></br></React.Fragment>
        })}
      </ProdChar>
    </ProdDet>}
  </Top>
  )
}

export default Overview;
