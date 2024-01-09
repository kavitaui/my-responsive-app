import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import {logo} from "./Project-images";

import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const [isVisible, setIsVisible]=useState(false);
  return (<>
    <div className='main-nav'>
        <div className='logo'>
             <img src= {logo} alt="" className='float-start'/>
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
        <span class="badge rounded-pill text-bg-primary px-4 py-3 btn-color">Get Started</span>
            <div className='hamburger-menu' onClick={()=>{setIsVisible(!isVisible)}}> <AiOutlineMenu />
          
            </div>
           {/* {JSON.stringify(isVisible)} */}

        </div></div>
        {/* <div className='container text-center' >
          <div className='row align-items-center'>
            <div className='col-12 col-md-6 col-lg-8'>
              <div>
              <button># Get your 14 days free trail</button>
              <h1>The Revolutionary App That Makes Your Life Easier Than Others Apps</h1>
              <button> Start Free Trail </button></div>
            </div>

            <div className='col-12 col-md-6 col-lg-4 d-md-none d-lg-block'>
              mobile image
            </div> */}
       

       
      
    </>
  )
}

export default Navbar;
