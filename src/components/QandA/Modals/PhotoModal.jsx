import React, {useState} from "react";
import "./PhotoModal.css";
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  max-height: 80vh;
`

export default function Modal ({url, toggleModal, modal}) {

  return (
    <>
      <div className="modal">
        <div
          className="overlay"
          onClick={toggleModal}>
        </div>
        <div className="modal-content">
          <Image src={url}></Image>
          <button
            className="close-modal"
            onClick={toggleModal}
            >
            CLOSE
          </button>
        </div>
      </div>
    </>
  )
}