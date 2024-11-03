import React from 'react'
import './styles/navbar.css'

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className="navlogo">
                <NavLink to="/">
                    <img src="./shoestacklogo.png" alt="shoestacklogo" />
                </NavLink>
            </div>
            <div className="center-navlinks-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/collections">Collections</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="right-navlinks-container">
                <NavLink to="/wishlist">
                    <img id='heartnavbar' src="./heart.svg" alt="wishlist" />
                </NavLink>
                <NavLink to="/bag">
                    <img src="./shoppingbag.svg" alt="shoppingbag" />
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar