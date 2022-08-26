import React from 'react'


var CheckOut = (props) => {
  return (
    <div className='buttons'>
      <select className='size'>SELECT SIZE</select>
      <select className='quantity'>-</select>
      <button className='addToCart'>Add To Cart</button>
    </div>
  )
}

export default CheckOut;