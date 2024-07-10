import React from 'react'
import './categeories.css'
import Cat_Item from './cat_item'
import categeories from '../Assets/categories'
import { Link } from 'react-router-dom';

const Categeories = (props) => {
  return (
    <div className='categeories'>
        <br/>
        <h1>CATEGEORIES</h1>
        <br/>
        <div className='categeories_section'>
        {categeories.map((item, i)=>{
        return <Link><Cat_Item key = {i} id = {item.id} name = {item.name} image = {item.image}/></Link>
      })}
     
      </div>
        </div>
  )
}

export default Categeories
