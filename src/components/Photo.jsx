import React from 'react'
import './style.css'
import img from '../img/adil.jpeg'

function Photo() {
    return (
        <div className='name'>
            <img src={img} alt="Adil" />
        </div>
    )
}

export default Photo;