import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9990;
  max-width: 100vw;
  max-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`

const ImgHolder = styled.div`
  position: absolute;
  flex-shrink: 5;
  display: flex;
  border: 3px solid #006FCD;
  border-radius: 10px;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 9998;
  max-height: 50%;
  max-width: 50%;
`
const ModalImg = styled.img`
  display: flex;
  z-index: 9998;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  max-height: 100%;
  max-width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
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

function ImageModal({ display, image, closeImg }) {

  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (image) {
      setImageURL(image);
    }
  }, [image])

  if (display) {
    return (
      <Modal>
        <ImgHolder>
        <Close onClick={closeImg}>x</Close>
        <ModalImg src={image}></ModalImg>
        </ImgHolder>
      </Modal>
    )
  } else {
    return null
  }
}

export default ImageModal;
