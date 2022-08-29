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
  top: 35%;
  left: 50%;
  padding: 10px;
  z-index: 9999;
`

const ModalBody = styled.div`
  padding: 10px;
`

const ComparisonsModal = (props) => {
  if (!props.show || !props.close) {
    return null;
  }

  return (
    <Modal onClick={props.handleClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
      <ModalBody>
        <h4>COMPARING</h4>
            <table>
              <tbody>
              <tr>
                <th>Product 1 Name</th>
                <th></th>
                <th>Product 2 Name</th>
              </tr>
              <tr>
                <td>✓</td>
                <td>Characteristic</td>
                <td></td>
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