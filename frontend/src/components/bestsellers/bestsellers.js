import React from 'react'
import './bestsellers.css'
import best_sellers from '../Assets/best_sellers'
import Item from '../item/item'

const Bestsellers = (props) => {
  return (
    <div className='bestsellers_section'>
      <h1> BEST SELLERS </h1>
      <div className='bestseller_prod'>
      {best_sellers.map((item, i)=>{
        return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price={item.old_price} stock ={item.stock} discount ={item.discount} whatsapp ={item.whatsapp} instagram ={item.instagram} youtube ={item.youtube} />
      })}
      </div>
    </div>
  )
}
export default Bestsellers