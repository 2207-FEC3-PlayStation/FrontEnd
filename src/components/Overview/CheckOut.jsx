import React from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';
import plus from '../../assets/pluscart.png';
import twitter from '../../assets/twitter.png';
import fb from '../../assets/fb.png';
import instagram from '../../assets/instagram.png';
import pinterest from '../../assets/pinterest.png';

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`
const Select = styled.select`
  background-color: #d9d5d5;
  color: black;
  padding: 20px 20px;
  margin-right: 10px;
  border:none;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #908c8c;
    }
`
const SizeSelect = styled(Select)`
  width: 213px;
`
const AddToCart = styled.button`
  width: 230px;
  padding: 20px 30px;
  margin-top: 30px;
  background-color: #006FCD;
  color: white;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  &:hover {
    background-color: #064881;
    }
`
const StarButton = styled.button`
  background: #006FCD url(${starbutton}) no-repeat center;
  height: 70px;
  width: 70px;
  border: none;
  color: white;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 30px;
  &:hover {
  background-color: #064881;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Row2 = styled(Row)`
  margin-top: 30px;
`
const Icon = styled.img`
  padding-right: 43px;
`

var CheckOut = (props) => {
  return (
    <OuterDiv>
      <div>
      <SizeSelect onChange={props.changeQuantity} required>
        <option>SELECT SIZE</option>
        {props.sizes.map((size, index) => {
          return <option key={index} value={size}>{size}</option>
        })}
      </SizeSelect>
      <Select required>
        <option>QTY</option>
        {props.maxQuantity.map((num, index) => {
          return <option key={index} selected={index === 0}>{num}</option>
        })}
      </Select>
      </div>
      <Row>
      <AddToCart onClick={props.handleAdd}>ADD TO BAG<img src={plus} style={{'marginLeft': '65px'}}></img></AddToCart>
      <StarButton></StarButton>
      </Row>
      <Row2>
        <Icon src={fb}></Icon>
        <Icon src={twitter}></Icon>
        <Icon src={instagram}></Icon>
        <Icon src={pinterest}></Icon>
      </Row2>
    </OuterDiv>
  )
}

export default CheckOut;
