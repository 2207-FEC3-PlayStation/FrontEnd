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
background-color: #d9d5d5;
color: black;
padding: 20px 20px;
margin-right: 10px;
border:none;
width: 213px;
font-family: Arial, Helvetica, sans-serif;
/* border: #504e4e 2px solid; */
border: none;
border-radius: 10px;
&:hover {
  background-color: #908c8c;
  }
`

const SizeOptions = styled.option`
font-family: Arial, Helvetica, sans-serif;
`

const QuantitySelect = styled.select`
background-color: #d9d5d5;
color: black;
padding: 20px 20px;
border:none;
margin-left: 10px;
font-family: Arial, Helvetica, sans-serif;
/* border: #504e4e 2px solid; */
border-radius: 10px;
border: none;
&:hover {
  background-color: #908c8c;
  }
`

const QuantityOptions = styled.option`
font-family: Arial, Helvetica, sans-serif;
`

const AddToCart = styled.button`
width: 230px;
padding: 20px 30px;
margin-top: 30px;
background-color: #006FCD;
/* background: transparent url(${plus}) no-repeat right center; */
color: white;
/* border: #504e4e 2px solid; */
border-radius: 10px;
border: none;
margin-right: 10px;
font-family: Arial, Helvetica, sans-serif;
text-align: left;
&:hover {
  background-color: #84bdef;
  }
`
// const plus = styled.img`
// padding-left: 15px;
// `

const StarButton = styled.button`
  background: #006FCD url(${starbutton}) no-repeat center;
  height: 70px;
  width: 70px;
  /* border: #504e4e 2px solid; */
  border: none;
  color: white;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 30px;
  &:hover {
  background-color: #84bdef;
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
      <SizeSelect onChange={props.changeQuantity} required>
        <SizeOptions>SELECT SIZE</SizeOptions>
        {props.sizes.map((size, index) => {
          return <SizeOptions key={index} value={size}>{size}</SizeOptions>
        })}

      </SizeSelect>
      <QuantitySelect required>
        <QuantityOptions>QTY</QuantityOptions>
        {props.maxQuantity.map((num, index) => {
          return <QuantityOptions key={index} selected={index === 0}>{num}</QuantityOptions>
        })}
      </QuantitySelect>
      </div>
      <Row>
      <AddToCart onClick={props.handleAdd}>ADD TO BAG<img src={plus} style={{'marginLeft': '65px'}}></img></AddToCart>
      <StarButton></StarButton>
      </Row>
    </OuterDiv>
  )
}

export default CheckOut;