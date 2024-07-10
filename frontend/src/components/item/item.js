import React from 'react'
import './item.css'

const Item = (props) => {
  return (
    <div className='item'> 
    <div className='discount'><p>{props.discount}</p></div>
    <img className='prod_image' src={props.image} alt="" />
    <div className='prod_name'><h4>{props.name}</h4></div>
    <div className='item-prices'>
        <div className='item-price-new'>
            <p>{props.new_price}</p>
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
      <h5>{props.stock}</h5>
    </div>
    <div className='social_media'>
      <section className='whatsapp_icon'>{props.whatsapp}</section>
       <section className='instagram_icon'>{props.instagram}</section> 
       <section className='youtube_icon'>{props.youtube}</section>
    </div>
    </div>
  )
}
export default Item