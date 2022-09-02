import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
  z-index: 9997;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  position: relative;
  background: white;
  border: 1px solid gray;
  top: 25%;
  left: 15%;
  padding: 10px;
  z-index: 9998;
  height: 45%;
  width: 36%;
`

const ModalBody = styled.div`
  padding: 10px;
`

const TC = styled.td`
  text-align: center;
  padding: 15px;
`

const TL = styled(TC)`
  text-align: left;
`

const TR = styled(TC)`
  text-align: right;
`
const Span = styled.span`
`
const CL = styled.div`
height: 57px;
z-index: 9998;
`
const Column = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
position: absolute;
margin-left: 10px;
margin-top: 38px;
`
const Column2 = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
position: absolute;
margin-left: 510px;
margin-top: 38px;
`

const Table = styled.table`

`

function ComparisonsModal (props) {
  if (!props.show) {
    return null;
  }
  const [characteristics, setCharacteristics] = useState([]);
  const [check1, setCheck1] = useState([]);
  const [check2, setCheck2] = useState([]);

  //props.prod = current product being viewed
  //props.item = related item clicked on

  useEffect(() => {
    //sets characteristics to the features of both the current product being
    //viewed and the related item the user clicked on (with no duplicates)
    var currentProd = props.prod.features.slice();
    var relatedProd = props.item.features.slice();
    var combinedChar = currentProd.concat(relatedProd);
    const key = 'value';
    const unique = [...new Map(combinedChar.map(item =>
      [item[key], item])).values()];
    setCharacteristics(unique);

    // for the current product, loop through the characteristics and check if the current
    // has that characteristic. if it does, push a check mark to the array. This array is
    // my column of checkmarks for the current product that lays on top of the table.
    // I had to do it this way since I couldn't figure out how to do it correctly within
    // the table tags and structure using html.
    var array = [];
    currentProd.forEach((object, index) => {
      currentProd[index] = JSON.stringify(object)
    })
    unique.forEach((feature) => {
      if (currentProd.includes(JSON.stringify(feature))) {
        array.push('✓')
      } else {
        array.push('')
      }
    })
    setCheck1(array);

    // repeat with related product.
    var array2 = [];
    unique.forEach((feature) => {
      if (relatedProd.includes(feature)) {
        array2.push('✓')
      } else {
        array2.push('')
      }
    })
    setCheck2(array2);

  }, [props.prod])

  return (
    <Modal onClick={props.handleClose}>
    <ModalContent onClick={e => e.stopPropagation()}>
    <ModalBody>
      <small>COMPARING</small>
        <Column>
        {check1.map((check, index) => {
          return <CL key={index}>{check}</CL>
        })}
        </Column>
        <Column2>
          {check2.map((check, index) => {
            return <CL key={index}>{check}</CL>
          })}
        </Column2>
        <Table>
          <tbody>
          <tr>
            <th>{props.prod.name}</th>
            <th></th>
            <th>{props.item.name}</th>
          </tr>
          {characteristics.map((characteristic, index) => {
            return <tr key={index}>
              <TL></TL>
              <TC> {characteristic.value.replace(/[A-Z]/g, ' $&').trim()} {characteristic.feature} </TC>
              <TR></TR>
            </tr>
          })}
          </tbody>
        </Table>
    </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default ComparisonsModal;
