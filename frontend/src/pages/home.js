import React from 'react'
import './pages.css'
import { NavLink } from "react-router-dom";
import home_banner from '../components/Assets/home_banner.jpg'
import Categeories from '../components/categeories/categeories';
import Bestsellers  from '../components/bestsellers/bestsellers';
import { Newarrivals } from '../components/newarrivals/newarrivals';
import { Shop_by_brands } from '../components/shop_by_brands/shop_by_brands';



function Home() {
  return (
    <div>
    <div className='hm_banner'>
    <NavLink className="home_banner_img" to="/helmets"> <img src={home_banner} alt="" /> </NavLink>
    </div> 
    <Categeories />
    <hr/>
    <Bestsellers />
    <br/>
    <br/>
    <Newarrivals />
    <br/>
    <br/>
    <Shop_by_brands /> 
    </div>
  )
}

export default Home