import React from 'react';
import './Footer.css';
import bikershub from '../Assets/bikershub.jpg'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from 'react-router-dom';




const Footer = () => {
    return (
        <footer className='footer_content'>
        <div className='news_letter_Section'>
            <h1>SUBSCRIBE</h1>
            <section className='input_wrap'>
            <section className='input_feild'>
            <input type="search" name="search-form" id="search-form" className="newsletter_input"
                //onChange={(e) => setSearchQuery(e.target.value)}
                placeholder= "S U B S C R I B E"/>
                <button className='submit_button'>SUBNMIT</button>
            </section>
            <h4>Subscribe to stay tuned for new and latest updates. Let's do it! </h4>
            </section>
        </div>
        <div className='footer_links'>
            <div className='logo_social_icons'>
            <br/>
                <img src={bikershub} alt="" className='footer_logo' />
                <br/>
                <h3>Follow us</h3>
                <br/>
                <span><FaInstagram /> &nbsp; <FaTelegramPlane /> &nbsp;<CiTwitter />&nbsp; <FaFacebookF /> </span>
            </div>
            <div className='Product_links'>
                <h2>Product <hr/></h2>
                <ul className='useful_links'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/helmets">Helmets</NavLink>
                    <NavLink to="/accessories">Accessories</NavLink>
                    <NavLink to="/jackets">Jackets</NavLink>
                    <NavLink to="/spares">Spares</NavLink>
                    <NavLink to="/womens">Womens</NavLink>
                </ul>
            </div>
            <div className='footer_useful_links'></div>
            <div className='company_links'></div>
            <div className='address_links'></div>
        </div>
        </footer>
    );
}

export default Footer;
