import React from 'react'
import styled from 'styled-components'


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
width: 255px;
padding: 20px 30px;
margin-top: 30px;
background-color: #207420;
color: white;
border: none;
&:hover {
  background-color: #2f8d2f;
  }
`


var CheckOut = (props) => {
  return (
    <OuterDiv>
      <div>
      <SizeSelect>
        <SizeOptions>SELECT SIZE</SizeOptions>
        <SizeOptions>Small</SizeOptions>
      </SizeSelect>
      <QuantitySelect>
        <QuantityOptions>QTY</QuantityOptions>
        <QuantityOptions>1</QuantityOptions>
      </QuantitySelect>
      </div>
      <AddToCart>Add To Cart</AddToCart>
    </OuterDiv>
  )
}

export default CheckOut;