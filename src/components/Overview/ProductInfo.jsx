import React from 'react';
import styled from 'styled-components';
import StarRating from '../RandR/RatingBreakdown/StarRating.jsx';

const ProductName = styled.h2`
font-family: Arial, Helvetica, sans-serif;
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
font-family: Arial, Helvetica, sans-serif;
font-size: 15px;
margin-bottom: 3px;
`

const Reviews = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 13px;
margin: 0px;
padding-left: 10px;
a:active, a:visited {
    color: blue;
  }
`

const Price = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 15px;
margin-top: 20px;
margin-bottom: 20px;

`


var ProductInfo = (props) => {

  return (
      <React.Fragment>
      <ReviewSection>
      <StarRating avgRating={props.avgRating}/>
      <Reviews><a href="#reviews">Read all {props.numReviews} reviews</a></Reviews>
      </ReviewSection>
      <Category>{props.info.category.toUpperCase()}</Category>
      <ProductName>{props.info.name}</ProductName>
      <Price>{'$' + props.info.default_price}</Price>
      </React.Fragment>
  )
}

export default ProductInfo;