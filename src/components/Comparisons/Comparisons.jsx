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
  height: 80px;
  width: 120px;
  top: 9.27%;
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
  const [products, setProducts] = useState([
// {
//   "id": 66648,
//   "campus": "hr-rfc",
//   "name": "Blues Suede Shoes",
//   "slogan": "2019 Stanley Cup Limited Edition",
//   "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
//   "category": "Dress Shoes",
//   "default_price": "120.00",
//   "created_at": "2022-03-31T21:13:15.875Z",
//   "updated_at": "2022-03-31T21:13:15.875Z",
//   "features": [
//       {
//           "feature": "Sole",
//           "value": "Rubber"
//       },
//       {
//           "feature": "Material",
//           "value": "FullControlSkin"
//       },
//       {
//           "feature": "Stitching",
//           "value": "Double Stitch"
//       }
//   ],
//   "style": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
// },
// {
// "id": 66646,
// "campus": "hr-rfc",
// "name": "Heir Force Ones",
// "slogan": "A sneaker dynasty",
// "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
// "category": "Kicks",
// "default_price": "99.00",
// "created_at": "2022-03-31T21:13:15.875Z",
// "updated_at": "2022-03-31T21:13:15.875Z",
// "features": [
//     {
//         "feature": "Sole",
//         "value": "Rubber"
//     },
//     {
//         "feature": "Material",
//         "value": "FullControlSkin"
//     },
//     {
//         "feature": "Mid-Sole",
//         "value": "ControlSupport Arch Bridge"
//     },
//     {
//         "feature": "Stitching",
//         "value": "Double Stitch"
//     }
// ],
// "style": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
// }
]);
const [product, setProduct] = useState(props.prod);
const [related, setRelated] = useState([]);
const [stylesUpdated, setstylesUpdated] = useState(false);

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

  // gets styles of the related product and adds the thumbnail picture to each products info
  // is there a better way to do something after a request has finished than chaining .thens?
  useEffect(() => {
    if (products) {
      var photos = [];
      related.forEach((product) => {
        server.get('/products/styles', {product_id: product})
        .then((data) => {
          photos.push(data.data.results[0].photos[0].thumbnail_url);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          if (photos.length === products.length) {
            for (let i = 0; i < products.length; i++) {
              products[i].style = photos[i]
            }
            setstylesUpdated(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
      })
    }
  }, [products])

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
      <div>
        <Container>
          {stylesUpdated && <RelatedList id="RelatedList" products={products}/>}
          {clickedR && (
            <LeftButton onClick={() => scrollL()}>‹</LeftButton>
          )}
          {!hideR && (
            <RightButton onClick={() => scrollR()}>›</RightButton>
          )}
          <OutfitList products={products}/>
        </Container>
      </div>
    )
}

export default Comparisons;