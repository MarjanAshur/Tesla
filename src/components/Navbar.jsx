import React from 'react'



//icons
import { CgProfile } from "react-icons/cg";
import { IoGlobeOutline } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";

//css
import '../assets/css/navbar.css'

//logo
import Logo from '../assets/images/png-transparent-tesla-logo-tesla-motors-car-tesla-model-s-tesla-model-3-decal-angle-text-rectangle-thumbnail.png'
import ModelY from '../assets/images/Homepage-Model-Y-Desktop-Global.jpeg'

function Navbar() {
  return (
    <header>
    <div className='container'>
        <div className='row' >
        <div className='logo'>
       
        <svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>

        </div>
        <nav className='nav-bar'>
            <ul className='nav-list'>
                <li className='nav-item'>Vehicles</li>
                <li className='nav-item'>Energy</li>
                <li className='nav-item'>Charging</li>
                <li className='nav-item'>Discover</li>
                <li className='nav-item'>Shop</li>
            </ul>
        </nav>
        <div className='icons flex'>
    <TbHelp className='nav-icon'/>
    <IoGlobeOutline className='nav-icon'/>
    <CgProfile className='nav-icon'/>
        </div> 

        </div>
    </div>
    
      
   
  
    </header>
  )
}

export default Navbar
