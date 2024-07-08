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

    </div>
  )
}
export default Item