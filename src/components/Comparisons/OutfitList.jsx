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
  padding-top: 35px;
  display: flex;
  flex-direction: row;
`

const AddCard = styled.div`
  background-color: #eceaea;
  border: #eceaea 2px solid;
  border-radius: 5px;
  position: relative;
  padding-top: 7.68%;
  padding-bottom: 7.4%;
  margin-bottom: 15px;
  margin-right: 39px;
  width: 234px;
  text-align: center;
  line-height: 170px;
  &:hover {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`

const Addtext = styled.p`
margin-block-start: 0em;
`

const PlusButton = styled.button`
  background: #eceaea url(${plusbutton}) no-repeat top;
  border-radius: 90px;
  height: 50px;
  width: 50px;
  border: none;
  position: absolute;
  top: 55%;
  right: 35%;
  &:hover {
    background-color: #b1aeae;
  }
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
  // const [cookie, setCookie] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [outfitItems, setOutfitItems] = useState([]);
  const [hideR, setHideR] = useState(false);
  const [clickedR, setClickedR] = useState(false);

  // retrieves the outfitlist from the user's local storage which is saved on the client side and will persist until deleted by the user such as clearing the cache (I think!)
  useEffect(() => {
    var outfitlist = JSON.parse(localStorage.getItem("outfits"));
    outfitlist = outfitlist || []
    setOutfitItems(outfitlist);
  }, [loaded])

  // need this use effect to re-render the outfitItems after one has been deleted and saves the outfitItems to the local storage any time there is a change.
  useEffect(() => {
    var list = JSON.stringify(outfitItems);
    localStorage.setItem("outfits", `${list}`);
  }, [outfitItems])

  // adds the current product to the outfit list. removes any duplicates (if the user tries to add the same product again)
  function handleAdd() {
    var outfits = outfitItems.slice();
    outfits.push(props.prod);
    const key = 'id';
    const uniqueOutfits = [...new Map(outfits.map(item =>
      [item[key], item])).values()];
    setOutfitItems(uniqueOutfits);
  }

  // searches a copy of the outfititems by name for an index since I can't use indexof with objects. then I use that index to splice a copy of outfititems and set outfititems to that copy.
  function handleDelete(e) {
    var original = outfitItems.slice();
    var outfits = outfitItems.slice();
    outfits.forEach((object, index) => {
      outfits[index] = object.name;
    })
    var index = outfits.indexOf(e.target.name);
    original.splice(index, 1);
    setOutfitItems(original);
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
      <AddCard onClick={handleAdd}>
        <Addtext><strong>ADD TO OUTFIT</strong></Addtext>
        <PlusButton onClick={handleAdd}></PlusButton>
      </AddCard>
      <Carousel id="OutfitList">
      {outfitItems.map((item) => (
        <OutfitItem item={item} key={item.id} handleDelete={handleDelete} prod={props.prod} handleProduct={props.handleProduct}/>
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