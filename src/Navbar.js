import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';
import './Navbar.css'
import logo from './photos/logo (2).png'
const Navbar = () => {
  return (
    <>
    <header className='main'>
        <img src={logo} alt="logo"/>
        <div className='container-flex'>
            <nav className='list'>
                <NavLink to="/" className="list">Home</NavLink>
                <NavLink to="/About" className="list">About</NavLink>
                <NavLink to="/Services" className="list">Courses</NavLink>
                <NavLink to="/Contact" className="list">Contact</NavLink>
            </nav>
        </div>
        <div className='symbol'>
            <FaFacebookSquare className='fb'/>
            <FaInstagramSquare className='insta'/>
            <FaTwitterSquare className='twit'/>
        </div>
    </header>
    </>
  )
    
}

export default Navbar
