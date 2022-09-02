import React, { useState, useEffect } from 'react';
import OutfitItem from './OutfitItem.jsx';
import styled from 'styled-components';
import plusbutton from '../../assets/plusbutton.png';

const Carousel = styled.div`
  align-items: start;
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

const Outfits = styled.div`
  margin-bottom: 4%;
`

const AddCard = styled.div`
  background-color: white;
  border: 1px solid gray;
  position: relative;
  padding-top: 7.68%;
  padding-bottom: 7.68%;
  margin-bottom: 15px;
  width: 180px;
  text-align: center;
  line-height: 170px;
`

const Addtext = styled.h3`
margin-block-start: 0em;
`

const PlusButton = styled.button`
  background: transparent url(${plusbutton}) no-repeat top;
  height: 50px;
  width: 50px;
  border: none;
  position: absolute;
  top: 60%;
  right: 35%;
`

function OutfitList (props) {

  const [outfitItems, setOutfitItems] = useState([]);

  // check session/cookie...

  // adds the current product to the outfit list. removes any duplicates (if the user tries to add the same product again)
  function handleAdd() {
    var outfits = outfitItems.slice();
    outfits.push(props.prod);
    // let uniqueOutfits = [...new Set(outfits)];
    const key = 'id';
    const uniqueOutfits = [...new Map(outfits.map(item =>
      [item[key], item])).values()];
    setOutfitItems(uniqueOutfits);
  }

  function handleDelete(e) {
    var outfits = outfitItems.slice();
    var index = outfits.indexOf(e.target.value);
    outfits.splice(index, 1);
    setOutfitItems(outfits);
  }

  return (
    <Outfits>
      <h4>YOUR OUTFIT</h4>
      <Carousel>
      {outfitItems.map((item) => (
        <OutfitItem item={item} key={item.id} handleDelete={handleDelete}/>
      ))}
      <AddCard>
        <Addtext>Add To Outfit</Addtext>
        <PlusButton onClick={handleAdd}></PlusButton>
      </AddCard>
      </Carousel>
    </Outfits>
  )
}


export default OutfitList;