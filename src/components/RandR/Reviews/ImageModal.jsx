import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  z-index: 9990;
  max-width: 60vw;
  max-height: 60vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto
`

const ModalImg = styled.img`
  position: absolute;
  display: flex;
  flex-basis: 100%
  flex-basis: 100%;
  justify-content: center;
  z-index: 9998;
  max-height: 100%;
  max-width: 100%
`
const Close = styled.button`
  position: absolute;
  display: flex;
  z-index: 9999;
  height: 20px;
  margin: 5px;
  background-color: white;
  border: none;
  `

function ImageModal ({display, image, closeImg}) {

  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (image) {
      setImageURL(image);
    }
  }, [image])

  if (display) {
    return (
      <Modal>
        <Close onClick={closeImg}>x</Close>
        <ModalImg src={image}></ModalImg>
     </Modal>
    )
  } else {
    return null
  }
}

export default ImageModal;
