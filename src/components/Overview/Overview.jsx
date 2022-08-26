import React, { useState, useEffect } from 'react'
import ImageGallery from './ImageGallery.jsx'
import ProductInfo from './ProductInfo.jsx'
import StyleSelect from './StyleSelect.jsx'
import CheckOut from './CheckOut.jsx'
import axios from 'axios'

//product={prod} setProd={setProd}
class Overview extends React.Components {
  constructor(props) {
    super(props)
    this.state = {
      dummy: []
    }
  }




  render() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery />
      <ProductInfo />
      <StyleSelect />
      <CheckOut />
    </div >
  )
}
}

export default Overview;


