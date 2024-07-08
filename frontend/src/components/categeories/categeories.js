import React from 'react'
import './categeories.css'

const Categeories = (props) => {
  return (
    <div className='categeories'>
        <h1>CATEGEORIES</h1>
        <div className='categeories_section'>
            <section className='cat_prod'>
                <img className='cat_img' >{props.image}</img>
                <h3 className='cat_title'>{props.title}</h3>
            </section>
            <section className='cat_prod'>
            <img className='cat_img' >{props.image}</img>
                <h3 className='cat_title'>{props.title}</h3>
            </section>
            <section className='cat_prod'>
            <img className='cat_img' >{props.image}</img>
                <h3 className='cat_title'>{props.title}</h3>
            </section>
            <section className='cat_prod'>
            <img  className='cat_img'>{props.image}</img>
                <h3 className='cat_title'>{props.title}</h3>
            </section>
            <section className='cat_prod'>
            <img className='cat_img' >{props.image}</img>
                <h3 className='cat_title'>{props.title}</h3>
            </section>
            <section className='cat_prod'>
            <img className='cat_img' >{props.image}</img>
                <h3 className='cat_title'>{props.title}</h3>
            </section>
        </div>

    </div>
  )
}

export default Categeories
