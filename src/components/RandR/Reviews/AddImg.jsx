import React, { useState, useEffect} from 'react';
import styled from 'styled-components';


const Modal = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
  max-width: 50vw;
  max-height: 50vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto
`

const ModalInput = styled.div`
  position: absolute;
  padding: 5%;
  display: flex;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 50;
  max-width: 80%;
  min-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
`
const SubmitButton = styled.div`
  margin: 10px;
`

const AddedImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center
`

function AddImg ({display, displayAddImage, addPhotos}) {

  const [showFields, setShowFields] = useState(['enterImg'])

  let updatePhotos = (e) => {
    e.preventDefault();
    let newUrl = e.target.previousElementSibling.value;
    let newFields = [...showFields];
    newFields.splice(showFields.length - 1, 0, newUrl);
    setShowFields(newFields);
  }

  let submit = (e) => {
    e.preventDefault();
    addPhotos(showFields.slice(0, showFields.length - 1))
    displayAddImage();
  }

  let deleteEntry = (e) => {
    e.preventDefault();
    let thisUrl = e.target.previousSibling.firstChild.data;
    let index = thisUrl.indexOf(showFields);
    let newFields = [...showFields];
    newFields.splice(showFields[index], 1);
    setShowFields(newFields);
  }

  if (!display) {
    return null;
  }
  return (
    <Modal>
      <ModalInput>
        <h2>Add up to five photos</h2>
        {showFields.map((imageField) => {
          if (imageField !== 'enterImg') {
            return (
              <AddedImage key={imageField}>
                <p>{imageField}</p>
                <button style={{height: '50%', marginLeft: '5px'}} onClick={deleteEntry}>Delete</button>
              </AddedImage>
            )
          } else if (showFields.length === 6) {
            return null;
          } else {
            return (
              <form key={imageField}>
              <label htmlFor={'image' + imageField}>Add an Image</label>
              <input type='url' className='inputField' id={'image' + imageField} placeholder='Enter image URL here' required></input>
              <button type='submit' onClick={updatePhotos}>Add Photo</button>
              </form>
            )
          }
        })}
        <SubmitButton>
          <button  onClick={submit}>Confirm</button>
        </SubmitButton>
      </ModalInput>
    </Modal>
  )
}

export default AddImg;