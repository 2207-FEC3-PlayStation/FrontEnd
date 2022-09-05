import React from 'react';
import styled from 'styled-components';
import StarRating from '../RandR/RatingBreakdown/StarRating.jsx';

const ProductName = styled.h2`
font-family: "Gill Sans", sans-serif;
font-size: 40px;
margin-bottom: 0px;
margin-top: 0px;
word-wrap: break-word;
`

const ReviewSection = styled.div`
display: flex;
flex-direction: row;
`

const Category = styled.p`
font-family: "Gill Sans", sans-serif;
font-size: 20px;
margin-bottom: 0px;
`

const Reviews = styled.p`
font-family: "Gill Sans", sans-serif;
font-size: 15px;
margin: 0px;
padding-left: 15px;
`

const Price = styled.p`
font-family: "Gill Sans", sans-serif;
font-size: 25px;
margin-top: 10px;
margin-bottom: 10px;
`


var ProductInfo = (props) => {

  return (
      <React.Fragment>
      <ReviewSection>
      <StarRating avgRating={props.avgRating}/>
      <Reviews><a href="#reviews">Read all reviews</a></Reviews>
      </ReviewSection>
      <Category>{props.info.category.toUpperCase()}</Category>
      <ProductName>{props.info.name}</ProductName>
      <Price>{'$' + props.info.default_price}</Price>
      </React.Fragment>
  )
}

export default ProductInfo;