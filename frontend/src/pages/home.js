import React from 'react'
import './pages.css'
import { NavLink } from "react-router-dom";
import home_banner from '../components/Assets/home_banner.jpg'
import Categeories from '../components/categeories/categeories';
import Bestsellers  from '../components/bestsellers/bestsellers';


function Home() {
  return (
    <mian>
    <div className='hm_banner'>
    <NavLink className="home_banner_img" to="/helmets"> <img src={home_banner} alt="" /> </NavLink>
    <Categeories />
    <hr/>
    <Bestsellers />
    </div>  
    

    </mian>
  )
}

export default Home