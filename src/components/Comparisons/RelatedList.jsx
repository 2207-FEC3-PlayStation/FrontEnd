import React from 'react';
import ComparisonsModal from './ComparisonsModal.jsx';
import RelatedItem from './RelatedItem.jsx';
import styled from 'styled-components';

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
width: 1000px;
`
const Button = styled.button`
  background: transparent;
  border: none;
`

var RelatedList = (props) => (
  <div>
    <h4>RELATED PRODUCTS</h4>
    <Carousel>
    <Button>&laquo;</Button>
    {props.product.map((item) => (
    <RelatedItem item={item} key={item.id}/>
    ))}
    <Button>&raquo;</Button>
  </Carousel>
  </div>
)

  //66643 seems to be out of stock... so will have to check if there are any in stock first because thumbnail and other properties are null

  // sends a get request for related products for the current product (props.product) when it's mounted (useEffect)
  // for now just dummy data



export default RelatedList;
