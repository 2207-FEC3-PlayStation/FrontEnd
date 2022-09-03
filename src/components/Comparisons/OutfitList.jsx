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
  display: flex;
  flex-direction: row;
`

const AddCard = styled.div`
  background-color: white;
  border: 1px solid gray;
  position: relative;
  padding-top: 7.68%;
  padding-bottom: 7.4%;
  margin-bottom: 15px;
  margin-right: 39px;
  width: 234px;
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
const LeftButton = styled.button`
  position: absolute;
  font-size: 25px;
  color: #5d5c5c;
  height: 100px;
  width: 100px;
  top: 59%;
  left: 20%;
  border: none;
  padding-top: 17%;
  padding-bottom: 18.5%;
  background: transparent;
  background-image: linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 60%);
`
const RightButton = styled(LeftButton)`
  background: transparent;
  background-image: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 60%);
  left: 88%;
  width: 120px;
`

function OutfitList (props) {

  const [outfitItems, setOutfitItems] = useState([]);
  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);

  // check session/cookie...

  // adds the current product to the outfit list. removes any duplicates (if the user tries to add the same product again)
  function handleAdd() {
    var outfits = outfitItems.slice();
    outfits.push(props.prod);
    const key = 'id';
    const uniqueOutfits = [...new Map(outfits.map(item =>
      [item[key], item])).values()];
    setOutfitItems(uniqueOutfits);
  }

  function handleDelete(e) {
    var outfits = outfitItems.slice();
    console.log(e.target);
    var index = outfits.indexOf(e.target.value);
    outfits.splice(index, 1);
    setOutfitItems(outfits);
  }

  function scrollL () {
    const element = document.getElementById("OutfitList");
    element.scrollLeft -= 350;
    setHideR(false);
    setClickedR(false);
  }

  function scrollR () {
    const element = document.getElementById("OutfitList");
    if (element.scrollLeft === 0) {
      element.scrollLeft += 350;
      setHideR(true);
      setClickedR(true);
    } else {
      setHideR(true);
    }
  }

  return (
    <React.Fragment>
    <h4>YOUR OUTFIT</h4>
    <Outfits>
      <AddCard>
        <Addtext>Add To Outfit</Addtext>
        <PlusButton onClick={handleAdd}></PlusButton>
      </AddCard>
      <Carousel id="OutfitList">
      {outfitItems.map((item) => (
        <OutfitItem item={item} key={item.id} handleDelete={handleDelete}/>
      ))}
      </Carousel>
      {clickedR && (outfitItems.length > 3) && (
          <LeftButton onClick={() => scrollL()}>‹</LeftButton>
        )}
      {!hideR && (outfitItems.length > 3) && (
        <RightButton onClick={() => scrollR()}>›</RightButton>
      )}
    </Outfits>
    </React.Fragment>
  )
}


export default OutfitList;