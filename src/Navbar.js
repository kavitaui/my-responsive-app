import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logo } from "./Project-images";
import { MyNavBarItems } from './MyNavBarItems';
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [dropdownMenu, setDropDownMenu] = useState();
  const [isVisible, setIsVisible] = useState(false);

  return (<>
    <div className='main-nav'>
      {/* <div className='container container-md-fluid'> */}
      <div className='col-12'>
        <div className='row' >
          <div className='col-6 col-md-2 order-md-1 col-lg-2   logo '>
            <img src={logo} alt="" />
          </div>
          <div className='col-6  col-md-4 order-md-3 col-lg-3 '>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-8'>
                    <div class="badge rounded-pill text-bg-primary px-4 py-3 btn-color">Get Started
                    </div>
                  </div>
                  <div className='col-4  '>
                    
                      <div className={ 'd-md-none hamburger-menu  '} onClick={() => { setIsVisible(!isVisible) }}>
                        <AiOutlineMenu  />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-6 col-lg-7 order-md-2 ${!isVisible? "d-none":""} d-md-block'`}>
            <div className='row navbar  show'>
              <ul className="navbar-nav ml-auto" data="nav nav-tabs">
                {MyNavBarItems.map((item) =>
                  <li key={item.id}
                    className="nav-item dropdown" onMouseEnter={() => { setDropDownMenu(item.id) }}>
                    <a className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{item.title}</a>
                    {item?.child.length > 0 &&
                      <div className={`dropdown-menu ${dropdownMenu === item.id ? 'show' : ''}`}>
                        {item.child.map((child) =>
                          <a key={child.id} className='dropdown-item nav-link'>{child.title}</a>
                        )}</div>
                    }
                  </li>
                )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>



      {/* {JSON.stringify(isVisible)} */}





    </div>
  </>
  )
}

export default Navbar;
