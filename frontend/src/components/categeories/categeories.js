import React from 'react'
import './categeories.css'
import Cat_Item from './cat_item'
import categeories from '../Assets/categories'




const Categeories = (props) => {
  return (
    <div className='categeories'>
        <br/>
        <h1>CATEGEORIES</h1>
        <br/>
        <ul className='categeories_section'>
        {categeories.map((item, i)=>{
          return <Cat_Item className='cat_pro' key = {i} id = {item.id} image={item.image}  name={item.name}/>
        })}
        </ul>
        </div>
  )
}

export default Categeories
