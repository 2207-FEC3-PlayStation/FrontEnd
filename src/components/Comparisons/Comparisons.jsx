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
  top: 13.3%;
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
// const LeftButton2 = styled(LeftButton)`
//   top: 59%;
//   left: 0%;
// `
// const RightButton2 = styled(LeftButton2)`
//   left: 88%;
// `
function Comparisons (props) {

  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(props.prod);
  const [related, setRelated] = useState([]);



  // gets related products for the current product and removes any duplicates and if it also contains itself as related
  useEffect(() => {
    if (props.prod) {
      var finalArray = [];
      server.get('/products/related', {product_id: props.prod.id})
      .then((data) => {
        var relatedProducts = data.data;
        if (relatedProducts.includes(props.prod.id)) {
          var index = relatedProducts.indexOf(props.prod.id);
          relatedProducts.splice(index, 1);
        }
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
      if (related.length === 0) {
        setProducts([]);
      } else {
        var finalArray = [];
        related.forEach((product) => {
          if (product !== props.prod.id) {
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
          }
        })
      }
    }
  }, [related])

  // checks if related item is out of stock. If it is, delete that item from related products
  // works but if you click on too many items it'll max out the requests to the API... don't click on too many related products in a short time frame.
  useEffect(() => {
    if (products) {
      related.forEach((item) => {
        server.get('/products/styles', {product_id: item})
        .then((data)=> {
          if (data.data.results[0].skus.null) {
            if (data.data.results[0].skus.null.quantity === null) {
              var index = related.indexOf(item);
              var copy = related.slice();
              copy.splice(index, 1);
              setRelated(copy);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        })
      })
    }
  }, [products])

  // clicking the card will navigate to the product detail page

  // sale prices should be in red with original crossed out - I haven't seen any sale prices in the API request?

  function scrollL () {
    const element = document.getElementById("RelatedListCarousel");
    element.scrollLeft -= 350;
    setHideR(false);
    setClickedR(false);
  }

  function scrollR () {
    const element = document.getElementById("RelatedListCarousel");
    if (element.scrollLeft === 0) {
      element.scrollLeft += 350;
      setHideR(true);
      setClickedR(true);
    } else {
      setHideR(true);
    }
  }

  return (
      <Container>
        <RelatedList id="RelatedList" products={products} prod={props.prod} handleProduct={props.handleProduct}/>
        {clickedR && (products.length > 4) && (
          <LeftButton onClick={() => scrollL()}>‹</LeftButton>
        )}
        {!hideR && (products.length > 4) && (
          <RightButton onClick={() => scrollR()}>›</RightButton>
        )}
        <OutfitList prod={props.prod}/>
        {/* {clickedR && (products.length > 4) && (
          <LeftButton2 onClick={() => scrollL()}>‹</LeftButton2>
        )}
        {!hideR && (products.length > 4) && (
          <RightButton2 onClick={() => scrollR()}>›</RightButton2>
        )} */}
      </Container>
    )
}

export default Comparisons;
