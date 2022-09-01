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
  align-items: left;
  justify-content: center;
  z-index: 9989;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  position: fixed;
  background: white;
  border: 1px solid gray;
  top: 35%;
  left: 50%;
  padding: 10px;
  z-index: 9998;
`

const ModalBody = styled.div`
  padding: 10px;
`

const TC = styled.td`
  text-align: center;
`

const TL = styled.td`
  text-align: left;
`

const TR = styled.td`
  text-align: right;
`
const Span = styled.span`
`

function ComparisonsModal (props) {
  if (!props.show) {
    return null;
  }
  const [characteristics, setCharacteristics] = useState([]);

  //props.prod = current product being viewed
  //props.item = related item clicked on

  //sets characteristics to the features of both the current product being viewed and the related item the user clicked on (with no duplicates)
  useEffect(() => {
    var combinedChar = props.prod.features.concat(props.item.features);
    console.log(combinedChar);
    const key = 'feature';
    const unique = [...new Map(combinedChar.map(item =>
      [item[key], item])).values()];
    console.log(unique);
    setCharacteristics(unique);
  }, [props.prod])

  return (
    <Modal onClick={props.handleClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
      <ModalBody>
        <small>COMPARING</small>
            <table>
              <tbody>
              <tr>
                <th>{props.prod.name}</th>
                <th></th>
                <th>{props.item.name}</th>
              </tr>
              {characteristics.map((feature, index) => {
                return <tr key={index}>
                  <TL></TL>
                  <TC> {feature.value} {feature.feature} </TC>
                  <TR></TR>
                </tr>
              })}
              {/* {props.item.features.map((feature) => {
                return <tr key={feature.value}>
                  <TL></TL>
                  <TC> {feature.value} {feature.feature} </TC>
                  <TR></TR>
                </tr>
              })} */}
              {/* <tr>
                <TL>✓</TL>
                <TC>Canvas</TC>
                <TR></TR>
              </tr>
              <tr>
                <TL></TL>
                <TC>100% Cotton</TC>
                <TR>✓</TR>
              </tr> */}
              </tbody>
            </table>
        {/* <button onClick={props.handleClose}>Close</button> */}
      </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ComparisonsModal;