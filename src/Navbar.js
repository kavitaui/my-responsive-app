import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const [isVisible, setIsVisible]=useState(false);
  return (
    <div className='main-nav'>
        <div className='logo'>
            Pakap
            <div className={isVisible?'nav-link mobile-menu-link':'nav-link'}>
                <ul><li>< a href ="#">Home</a></li>
               <li> < a href ="#">About Us</a></li>
               <li> < a href ="#">Pages</a></li>
               <li> < a href ="#">Shop</a></li>
               <li> < a href ="#">Block</a></li>
               <li> < a href ="#">Contact</a></li></ul>
            </div>
        </div>
        <div className='sign-up'>
            Get Started
            <div className='hamburger-menu' onClick={()=>{setIsVisible(!isVisible)}}> <AiOutlineMenu /></div>
           gfyg-{JSON.stringify(isVisible)}
        </div>
      
    </div>
  )
}

export default Navbar;
