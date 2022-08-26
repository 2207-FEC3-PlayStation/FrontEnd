import React from 'react'


var CheckOut = (props) => {
  return (
    <div className='buttons'>
      <button className='size'>SELECT SIZE</button>
      <button className='quantity'>-</button>
      <button className='addToCart'>Add To Cart</button>
    </div>
  )
}

export default CheckOut;