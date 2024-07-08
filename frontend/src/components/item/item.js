import React from 'react'
import './item.css'

const Item = (props) => {
  return (
    <div className='item'> 
    <img className='prod_image' src={props.image} alt="" />
    <div className='prod_name'><h3>{props.name}</h3></div>
    <div className='item-prices'>
        <div className='item-price-new'>
            {props.new_price}
        </div>
        <div className='item-price-old'>
            {props.old_price}
        </div>
    </div>
    <div className='buy_cart'>
    <div className='buy_now'> <button> BUY NOW </button> </div>
    <div className='add_to_cart'> <button> ADD TO CART </button> </div>
    </div>
    </div>
  )
}
export default Item