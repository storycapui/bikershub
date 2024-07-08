import React from 'react'
import './item.css'

const Item = (props) => {
  return (
    <div className='item'> 
    <img src={props.image} alt="" />
    <p>{props.image}</p>
    <div className='item-prices'>
        <div className='item-price-new'>
            {props.new.price}
        </div>
        <div className='item-price-old'>
            {props.old.price}
        </div>
    </div>

    </div>
  )
}
export default Item