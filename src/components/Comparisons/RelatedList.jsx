import React from 'react';
import ComparisonsModal from './ComparisonsModal.jsx';
import RelatedItem from './RelatedItem.jsx';
import styled from 'styled-components';
import rightArrow from '../../assets/rightarrow.png';
import leftArrow from '../../assets/leftarrow.png';

const Carousel = styled.div`
align-items: left;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
overflow: hidden;
padding: 10px;
margin-left: auto;
margin-right: auto;
width: 100%;
position: relative;
`
const LeftButton = styled.button`
  background: transparent url(${leftArrow}) no-repeat top;
  position: absolute;
  height: 25px;
  width: 25px;
  top: 48%;
  left: 5%;
  border: none;
`

const RightButton = styled.button`
  background: transparent url(${rightArrow}) no-repeat top;
  position: absolute;
  height: 25px;
  width: 25px;
  top: 48%;
  right: 5%;
  border: none;
`

var RelatedList = (props) => (
  <div>
    <h4>RELATED PRODUCTS</h4>
    <Carousel>
    <LeftButton></LeftButton>
    {props.product.map((item) => (
    <RelatedItem item={item} key={item.id}/>
    ))}
    <RightButton></RightButton>
  </Carousel>
  </div>
)

  //66643 seems to be out of stock... so will have to check if there are any in stock first because thumbnail and other properties are null

  // sends a get request for related products for the current product (props.product) when it's mounted (useEffect)
  // for now just dummy data



export default RelatedList;
