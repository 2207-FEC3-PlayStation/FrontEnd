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
//     {
//       "id": 66642,
//       "campus": "hr-rfc",
//       "name": "Camo Onesie",
//       "slogan": "Blend in to your crowd",
//       "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//       "category": "Jackets",
//       "default_price": "140.00",
//       "created_at": "2022-03-31T21:13:15.875Z",
//       "updated_at": "2022-03-31T21:13:15.875Z",
//       "features": [
//           {
//               "feature": "Fabric",
//               "value": "Canvas"
//           },
//           {
//               "feature": "Buttons",
//               "value": "Brass"
//           }
//       ],
//       "style": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
//   }
//   ,
//   {
//     "id": 66644,
//     "campus": "hr-rfc",
//     "name": "Morning Joggers",
//     "slogan": "Make yourself a morning person",
//     "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
//     "category": "Pants",
//     "default_price": "40.00",
//     "created_at": "2022-03-31T21:13:15.875Z",
//     "updated_at": "2022-03-31T21:13:15.875Z",
//     "features": [
//         {
//             "feature": "Fabric",
//             "value": "100% Cotton"
//         },
//         {
//             "feature": "Cut",
//             "value": "Skinny"
//         }
//     ],
//     "style": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
//   },
//   {
//     "id": 66649,
//     "campus": "hr-rfc",
//     "name": "YEasy 350",
//     "slogan": "Just jumped over jumpman",
//     "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
//     "category": "Kicks",
//     "default_price": "450.00",
//     "created_at": "2022-03-31T21:13:15.875Z",
//     "updated_at": "2022-03-31T21:13:15.875Z",
//     "features": [
//         {
//             "feature": "Sole",
//             "value": "Rubber"
//         },
//         {
//             "feature": "Material",
//             "value": "FullControlSkin"
//         },
//         {
//             "feature": "Stitching",
//             "value": "Double Stitch"
//         }
//     ],
//     "style": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
// },
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

  // send a get request for related products
    // returns an array of product ids

  useEffect(() => {
    // if (!props.prod) {
    //   return <div>Loading...</div>
    // }
    loadRelated();
  }, [product]);

  function loadRelated() {
    console.log('props now', props);
    var finalArray = [];
    server.get('/products/related', {product_id: props.prod.id})
      .then((data) => {
        var relatedProducts = data.data;
        setRelated(relatedProducts);
        // relatedProducts.forEach((product) => {
        //   server.get('/product', {product_id: product})
        //   .then((data) => {
        //     finalArray.push(data.data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   })
        //   .then(()=> {
        //     setProducts(finalArray);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   })
        // })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    loadData();
  }, [related])

  function loadData () {
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
        setProducts(finalArray);
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }

  // send a get request for styles of those related products

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

  // if (products.length < 5) {
  //   return <div>Loading...</div>
  // }
  // if (!props.prod) {
  //   return <div>Loading...</div>
  // }

  return (
      <div>
        <Container>
          <RelatedList id="RelatedList"products={products}/>
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