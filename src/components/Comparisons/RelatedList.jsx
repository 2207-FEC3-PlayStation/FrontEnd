import React from 'react';
import RelatedItem from './RelatedItem.jsx';
import styled from 'styled-components';

const Related = styled.div`
  margin-bottom: 4%;
`
const Carousel = styled.div`
  align-items: left;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 957px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  scroll-behavior: smooth;
`


var RelatedList = (props) => (
  <Related>
    <h4>RELATED PRODUCTS</h4>
    <Carousel id="RelatedListCarousel">
    {props.product.map((item) => (
      <RelatedItem item={item} key={item.id}/>
    ))}
    </Carousel>
  </Related>
)

  //66643 seems to be out of stock... so will have to check if there are any in stock first because thumbnail and other properties are null

  // sends a get request for related products for the current product (props.product) when it's mounted (useEffect)
  // for now just dummy data



export default RelatedList;
