import React from 'react';
import styled from 'styled-components';
import StarRating from '../RandR/RatingBreakdown/StarRating.jsx';

const ProductName = styled.h2`
font-family: "Gill Sans", sans-serif;
font-size: 40px;
margin-bottom: 0px;
margin-top: 0px;
`

const Category = styled.p`
font-family: "Gill Sans", sans-serif;
font-size: 25px;
margin-bottom: 0px;
`

const Reviews = styled.p`
font-family: "Gill Sans", sans-serif;
font-size: 15px;
margin-bottom: 0px;
`

const Price = styled.p`
font-family: "Gill Sans", sans-serif;
font-size: 25px;
margin-bottom: 0px;
`

var ProductInfo = (props) => {
  return (
      <React.Fragment>
      <StarRating/>
      <Reviews>Read all reviews</Reviews>
      <Category>{props.info.category.toUpperCase()}</Category>
      <ProductName>{props.info.name}</ProductName>
      <Price>{'$' + props.info.default_price}</Price>
      </React.Fragment>
  )
}

export default ProductInfo;