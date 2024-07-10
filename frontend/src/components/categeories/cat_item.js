import React from 'react'
import './cat_item.css'

const Cat_Item = (props) => {
  return (
    <div className='cat_item'> 
    <img className='cat_prod_image' src={props.image} alt="" />
    <br/>
    <div className='cat_prod_name'><h3>{props.name}</h3></div>
    </div>
  )
}
export default Cat_Item