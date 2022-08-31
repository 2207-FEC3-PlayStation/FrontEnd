import React, { useState, useEffect } from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import styled from 'styled-components';
import server from '../../serverRequests.js';

const Container = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  width: 957px;
  position: relative;
  color: black;
  scroll-behavior: smooth;
`
const LeftButton = styled.button`
  position: absolute;
  font-size: 25px;
  color: #5d5c5c;
  height: 100px;
  width: 120px;
  top: 9.3%;
  left: 0%;
  border: none;
  padding-top: 17%;
  padding-bottom: 18.5%;
  background: transparent;
  background-image: linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 60%);
`
const RightButton = styled(LeftButton)`
  background: transparent;
  background-image: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 60%);
  left: 88%;
`

function Comparisons (props) {

  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(props.prod);
  const [related, setRelated] = useState([]);



  // gets related products for the current product
  useEffect(() => {
    if (props.prod) {
      var finalArray = [];
      server.get('/products/related', {product_id: props.prod.id})
      .then((data) => {
        var relatedProducts = data.data;
        let uniqueRelated = [...new Set(relatedProducts)];
        setRelated(uniqueRelated);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [props.prod]);

  // gets product info for each related product
  useEffect(() => {
    if (related) {
      var finalArray = [];
      related.forEach((product) => {
        server.get('/product', {product_id: product})
          .then((data) => {
            finalArray.push(data.data);
          })
          .catch((err) => {
            console.log(err);
          })
          .then(()=> {
            if (finalArray.length === related.length) {
              setProducts(finalArray);
            }
          })
          .catch((err) => {
            console.log(err);
          })
      })
    }
  }, [related])

  // checks if related item is out of stock. If it is, delete that item from related products
  // works but if you click on too many items it'll max out the requests to the API... works for some products but not others...
  useEffect(() => {
    if (products) {
      related.forEach((item) => {
        server.get('/products/styles', {product_id: item})
        .then((data)=> {
          if (data.data.results[0].skus.null) {
            if (data.data.results[0].skus.null.quantity === null) {
              console.log(`${item} is out of stock`);
              var index = related.indexOf(item);
              var copy = related.slice();
              copy.splice(1, index);
              setRelated(copy);
            }
            console.log('all related items in stock')
          }
        })
        .catch((err) => {
          console.log(err);
        })
      })
    }
  }, [products])

  //66643 seems to be out of stock... so may have to check if there are any in stock first because thumbnail and other properties are null

  // clicking the card will navigate to the product detail page

  // sale prices should be in red with original crossed out

  // star rating. if no reviews - should be hidden.

  // future enhancement - on hover, load other style images in a scrollable carousel. Clicking on a thumbnail should change the preview image to display the image clicked. The selection of a different image should persist even after no longer hovering over this card. Clicking on the preview image, and anywhere on the card other than a thumbnail image carousel, will continue to navigate the user to that product’s detail page.

  function scrollL () {
    console.log('clicked on left button')
    const element = document.getElementById("RelatedListCarousel");
    element.scrollLeft -= 250;
    setHideR(false);
    setClickedR(false);
  }

  function scrollR () {
    console.log('clicked on right button')
    const element = document.getElementById("RelatedListCarousel");
    if (element.scrollLeft === 0) {
      element.scrollLeft += 250;
      setHideR(true);
      setClickedR(true);
    } else {
      setHideR(true);
    }
  }

  return (
      <Container>
        <RelatedList id="RelatedList" products={products} prod={props.prod} handleProduct={props.handleProduct}/>
        {clickedR && (
          <LeftButton onClick={() => scrollL()}>‹</LeftButton>
        )}
        {!hideR && (products.length > 4) && (
          <RightButton onClick={() => scrollR()}>›</RightButton>
        )}
        <OutfitList products={products}/>
      </Container>
    )
}

export default Comparisons;