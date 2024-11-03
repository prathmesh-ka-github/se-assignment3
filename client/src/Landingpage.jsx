import React from 'react'
import './styles/landingpage.css'

import { NavLink } from 'react-router-dom'


function Landingpage() {
    return (  
        <div className="landingpage-container">
            <div className="mainimg-wrapper">
                <div className="mainimg-container">
                    <img src="/shoeimg.png" alt="landingpageimg" />
                    <img className='premiumshoestext' src="/premiumshoestext.png" alt="landingpageimg" />
                    <div className="landingpage-description">
                        <div className="desc-text">Starting at $119/-</div>
                        <NavLink to="/collections">Explore</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landingpage;