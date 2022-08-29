import React from 'react';
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
  z-index: 9999;
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
  z-index: 9999;
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

const ComparisonsModal = (props) => {
  if (!props.show || !props.close) {
    return null;
  }

  return (
    <Modal onClick={props.handleClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
      <ModalBody>
        <small>COMPARING</small>
            <table>
              <tbody>
              <tr>
                <th>Camo Onesie</th>
                <th></th>
                <th>Morning Joggers</th>
              </tr>
              <tr>
                <TL>✓</TL>
                <TC>Canvas</TC>
                <TR></TR>
              </tr>
              <tr>
                <TL></TL>
                <TC>100% Cotton</TC>
                <TR>✓</TR>
              </tr>
              </tbody>
            </table>
        {/* <button onClick={props.handleClose}>Close</button> */}
      </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ComparisonsModal;