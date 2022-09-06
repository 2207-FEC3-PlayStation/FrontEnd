import React from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';
import plus from '../../assets/pluscart.png';

const OuterDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
`

const SizeSelect = styled.select`
background-color: transparent;
color: black;
padding: 20px 20px;
margin-right: 10px;
border:none;
width: 213px;
font-family: Arial, Helvetica, sans-serif;
border: #504e4e 2px solid;
`

const SizeOptions = styled.option`
font-family: Arial, Helvetica, sans-serif;
`

const QuantitySelect = styled.select`
background-color: transparent;
color: black;
padding: 20px 20px;
border:none;
margin-left: 10px;
font-family: Arial, Helvetica, sans-serif;
border: #504e4e 2px solid;
`

const QuantityOptions = styled.option`
font-family: Arial, Helvetica, sans-serif;
`

const AddToCart = styled.button`
width: 230px;
padding: 20px 30px;
margin-top: 30px;
background-color: transparent;
/* background: transparent url(${plus}) no-repeat right center; */
color: black;
border: #504e4e 2px solid;
margin-right: 10px;
font-family: Arial, Helvetica, sans-serif;
text-align: left;
&:hover {
  background-color: grey;
  }
`
// const plus = styled.img`
// padding-left: 15px;
// `

const StarButton = styled.button`
  background: transparent url(${starbutton}) no-repeat center;
  height: 70px;
  width: 70px;
  border: #504e4e 2px solid;
  margin-left: 10px;
  margin-top: 30px;
  &:hover {
  background-color: grey;
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
      <AddToCart>ADD TO BAG<img src={plus} style={{'marginLeft': '60px'}}></img></AddToCart>
      <StarButton></StarButton>
      </Row>
    </OuterDiv>
  )
}

export default CheckOut;