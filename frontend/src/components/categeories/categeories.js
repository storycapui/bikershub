import React from 'react'
import './categeories.css'
//import Cat_Item from './cat_item'
//import categeories from '../Assets/categories'
import { NavLink } from "react-router-dom";
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';
import image4 from '../Assets/image4.jpg';
import image5 from '../Assets/image5.jpg';
import image6 from '../Assets/image6.jpg';



const Categeories = (props) => {
  return (
    <div className='categeories'>
        <br/>
        <h1>CATEGEORIES</h1>
        <br/>
        <ul className='categeories_section'>
        <NavLink className="cat_pro" to="/accessories"><img src={image1}/> <h2>Accessories</h2></NavLink>
        <NavLink className="cat_pro" to="/helmets"><img src={image2}/><h2>Helmets</h2></NavLink>
        <NavLink className="cat_pro" to="/gears"><img src={image3}/><h2>Jackets</h2></NavLink>
        <NavLink className="cat_pro" to="/shoes"><img src={image4}/><h2>Gears</h2></NavLink>
        <NavLink className="cat_pro" to="/spares"><img src={image5}/><h2>Spares</h2></NavLink>
        <NavLink className="cat_pro" to="/womens"><img src={image6}/><h2>Womens</h2></NavLink>
        </ul>
        </div>
  )
}

export default Categeories

/*{categeories.map((item, i)=>{
  return <Cat_Item className='cat_pro' key = {i} id = {item.id} image={item.image}  name={item.name}/>
})} */
