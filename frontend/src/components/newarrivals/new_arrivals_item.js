import React from 'react'
import './newarrivals.css'

const New_Item = (props) => {
  return (
    <div className='new_arr_item'> 
    <img className='new_arr_image' src={props.image} alt="" />
    </div>
  )
}
export default New_Item