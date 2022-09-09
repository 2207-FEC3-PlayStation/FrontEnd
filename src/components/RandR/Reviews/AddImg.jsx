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
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
  max-width: 100vw;
  max-height: 100vh;
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
  border: 3px solid #006FCD;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 50;
  max-width: 50%;
  min-width: 50%;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`
const Button = styled.button`
  color: white;
  background-color: #006FCD;
`

const AddedImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150px;
`

const Thumbnail = styled.div`
  height: 10%;
  width: auto
`

function AddImg ({display, displayAddImage, addPhotos}) {

  const [addedImages, setAddedImages] = useState(['enterImg'])

  let updatePhotos = (e) => {
    e.preventDefault();
    let newUrl = e.target.previousElementSibling.value;
    let newFields = [...addedImages];
    newFields.splice(addedImages.length - 1, 0, newUrl);
    setAddedImages(newFields);
    e.target.previousElementSibling.value = '';
  }

  let submit = (e) => {
    e.preventDefault();
    addPhotos(addedImages.slice(0, addedImages.length - 1))
    displayAddImage();
  }

  let deleteEntry = (e) => {
    e.preventDefault();
    let thisUrl = e.target.previousSibling.src;
    let index = addedImages.indexOf(thisUrl);
    let newFields = [...addedImages];
    newFields.splice(addedImages[index], 1);
    setAddedImages(newFields);
  }

  let close = (e) => {
    e.preventDefault();
    setAddedImages(['enterImg'])
    displayAddImage();
  }

  if (!display) {
    return null;
  }
  return (
    <Modal>
      <ModalInput>
        <h2>ADD UP TO FIVE PHOTOS</h2>
        {addedImages.map((imageField) => {
          if (imageField !== 'enterImg') {
            return (
              <AddedImage key={imageField}>
                <img src={imageField} style={{height: '100px', width: 'auto'}}></img>
                <Button style={{height: '20%', marginLeft: '5px'}} onClick={deleteEntry}>Delete</Button>
              </AddedImage>
            )
          } else if (addedImages.length === 6) {
            return null;
          } else {
            return (
              <form key={imageField}>
              <label htmlFor={'image' + imageField}>Add an Image</label>
              <input type='url' className='inputField' id={'image' + imageField} placeholder='Enter image URL here' required></input>
              <Button type='submit' onClick={updatePhotos}>ADD PHOTO</Button>
              </form>
            )
          }
        })}
        <Buttons>
          <Button style={{marginRight: '10px'}}onClick={submit}>CONFIRM</Button>
          <Button onClick={close}>CANCEL</Button>
        </Buttons>
      </ModalInput>
    </Modal>
  )
}

export default AddImg;