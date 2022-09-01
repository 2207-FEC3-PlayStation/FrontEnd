import React from 'react';
import styled from 'styled-components';
import StarRating from '../RandR/RatingBreakdown/StarRating.jsx';

const Block = styled.div`

`

const ProductName = styled.h1`
font-family: "Gill Sans", sans-serif;
margin-top: 20px;
font-size: 40px;
`

const Category = styled.p`
font-family: "Gill Sans", sans-serif;
`

const Reviews = styled.p`
font-family: "Gill Sans", sans-serif;
`

const Price = styled.p`
font-family: "Gill Sans", sans-serif;
`
const Line = styled.div`
background-color: black;
height: 1px;
width: 65%;
`

var ProductInfo = (props) => {
  return (
    <Block>
      <ProductName>{props.info.name}</ProductName>
      <StarRating/>
      <Reviews>Read all reviews</Reviews>
      <Category>{props.info.category}</Category>
      <Price>{'$' + props.info.default_price}</Price>
      <Line></Line>
    </Block>
  )
}

export default ProductInfo;