import React from 'react';
import './Footer.css';
import bikershub from '../Assets/bikershub.jpg'

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
                
            </div>
            <div className='Product_links'></div>
            <div className='footer_useful_links'></div>
            <div className='company_links'></div>
            <div className='address_links'></div>
        </div>
        </footer>
    );
}

export default Footer;
