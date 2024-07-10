import React from 'react'
import './item.css'

const Item = (props) => {
  return (
    <div className='item'> 
    <div className='discount'><p>{props.discount}</p></div>
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
    <div className='stock_avail'>
      <h3>{props.stock}</h3>
    </div>
    <div className='social_media'>
      <section className='whatsapp_icon'>{props.whatsapp}</section>
       <section className='instagram_icon'>{props.instagram}</section> 
    </div>
    </div>
  )
}
export default Item