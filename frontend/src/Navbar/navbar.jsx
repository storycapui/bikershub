import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import bikershub from '../components/Assets/bikershub.jpg'
import cart_icon from '../components/Assets/cart_icon.png'



function Navbar() {
  return (
     <div className='navbar'>
        <div className="nav-top"><marquee> <p>Above 5000/- Purchase  #ALL Over India Free Delivery &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Contact Support [9:00 am to 7:pm]</p></marquee></div>
        <div className="nav-menu">
            <div className="nav">
              <NavLink exact to="/" className="logo_icon"> <img src={bikershub} alt="bikershub logo" /> </NavLink> 
                <div className="search_bar"><input type="search" name="search-form" id="search-form" className="search-input"
                //onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔎 EXPLORE"/>
                </div>
                <div className="login_cart_buttons">
                    <img src={cart_icon} alt="cart icon" />

                    <button className='login_button'>Login</button>
                </div>  
            </div>
            <div className="menu">
             <li className='menulink'><GiHamburgerMenu className='hamburger'/>&nbsp;MENU</li>
                <ul className="navlinks">
                 <NavLink  to ="/helmets"  className="links"> <li > &nbsp; Helmets &nbsp; </li></NavLink>  
                 <NavLink  to ="/shoes"  className="links"> <li >&nbsp; Shoes &nbsp; </li></NavLink>   
                 <NavLink  to ="/gears" className="links"> <li >&nbsp; Gears &nbsp; </li></NavLink>   
                 <NavLink  to ="/accessories" className="links"> <li > &nbsp; Accessories &nbsp; </li></NavLink>   
                 <NavLink  to ="/spares" className="links"> <li >&nbsp; Spares &nbsp; </li></NavLink>   
                 <NavLink  to ="/womens"  className="links"> <li >&nbsp; Womens &nbsp; </li></NavLink>   
                </ul>
                <NavLink  to ="/community"> <button className='jncomnty' >JOIN COMMUNITY</button></NavLink>
            </div>
        </div>

     </div>
  )
}

export default Navbar