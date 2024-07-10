import React from 'react'
import './newarrivals.css'
import new_arrivals from '../Assets/new_arrivals'
import New_Item from './new_arrivals_item'
import { NavLink } from 'react-router-dom'



export const Newarrivals = (props) => {
  return (
    <div className='newarrivals_section'>
        <h1>New Arrivals</h1>
        <ul className='new_arr_section'>
        {new_arrivals.map((item, i)=>{
          return <NavLink><New_Item className='new_arr' key = {i} id = {item.id} image={item.image}/></NavLink>
        })}
        </ul>
    </div>
  )
}
