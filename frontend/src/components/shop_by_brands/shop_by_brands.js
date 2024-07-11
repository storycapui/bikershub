import React from 'react'
import './shop_by_brands.css'
import { NavLink } from 'react-router-dom'

export const Shop_by_brands = () => {
  return (
    <div className='shop_b_brnds'>
        <h1>shop by brands</h1>
        <div className='brands'>
          <NavLink className="brand_icon" to="/"><h3>Brand 1</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 2</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 3</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 4</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 5</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 6</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 7</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 8</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 9</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 10</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 11</h3></NavLink>
          <NavLink className="brand_icon"><h3>Brand 12</h3></NavLink>
        </div>
    </div>
  )
}
