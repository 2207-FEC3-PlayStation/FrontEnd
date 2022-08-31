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
  padding-left: 0;
`


var RelatedList = (props) => (
  <Related>
    <h4>RELATED PRODUCTS</h4>
    <Carousel id="RelatedListCarousel">
    {props.products.map((item) => (
      <RelatedItem item={item} key={item.id} prod={props.prod} handleProduct={props.handleProduct} />
    ))}
    </Carousel>
  </Related>
)






export default RelatedList;
