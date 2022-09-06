import React from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';

const OuterDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
`

const SizeSelect = styled.select`
background-color: #d2d2d2;
color: white;
padding: 20px 20px;
margin-right: 10px;
border:none;
width: 213px;
`

const SizeOptions = styled.option`
`

const QuantitySelect = styled.select`
background-color: #d2d2d2;
color: white;
padding: 20px 20px;
border:none;
margin-left: 10px;
`

const QuantityOptions = styled.option`
`

const AddToCart = styled.button`
width: 230px;
padding: 20px 30px;
margin-top: 30px;
background-color: #207420;
color: white;
border: none;
margin-right: 10px;
&:hover {
  background-color: #2f8d2f;
  }
`

const StarButton = styled.button`
  background: #207420 url(${starbutton}) no-repeat center;
  height: 70px;
  width: 70px;
  border: none;
  margin-left: 10px;
  margin-top: 30px;
  &:hover {
  background-color: #2f8d2f;
  }
`

const Row = styled.div`
display: flex;
flex-direction: row;
`
var CheckOut = (props) => {
  return (
    <OuterDiv>
      <div>
      <SizeSelect onChange={props.changeQuantity}>
        <SizeOptions >SELECT SIZE</SizeOptions>
        {props.sizes.map((size, index) => {
          return <SizeOptions key={index} >{size}</SizeOptions>
        })}

      </SizeSelect>
      <QuantitySelect>
        <QuantityOptions>QTY</QuantityOptions>
        {props.maxQuantity.map((num, index) => {
          return <QuantityOptions key={index}>{num}</QuantityOptions>
        })}
      </QuantitySelect>
      </div>
      <Row>
      <AddToCart>ADD TO BAG</AddToCart>
      <StarButton></StarButton>
      </Row>
    </OuterDiv>
  )
}

export default CheckOut;