import React, { useState } from 'react'
import { logo } from "./Project-images";
import { MyNavBarItems } from './MyNavBarItems';
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const FullResponsiveNavBar = () => {
  const [dropdownMenu, setDropDownMenu] = useState();
  const [isVisible, setIsVisible] = useState(false);
  return (
    // <div classNameName='container'>
    //   <div classNameName='co-12'>
    //     <div classNameName='row'>
    //       <div classNameName='col col-md-3 col-lg-2 '>
    //         <img src={logo} alt="" />
    //       </div>
    //       <div classNameName=' col-6 d-none col-md-6  d-md-block col-lg-7'>
    //         <div classNameName='row'>
    //           <ul classNameName="navbar-nav ml-auto" data="nav nav-tabs">
    //             {MyNavBarItems.map((item) =>
    //               <li key={item.id}
    //                 classNameName="nav-item dropdown" onMouseEnter={() => { setDropDownMenu(item.id) }}>
    //                 <a classNameName="nav-link dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{item.title}</a>
    //                 {item?.child.length > 0 &&
    //                   <div classNameName={`dropdown-menu ${dropdownMenu === item.id ? 'show' : ''}`}>
    //                     {item.child.map((child) =>
    //                       <a key={child.id} classNameName='dropdown-item nav-link'>{child.title}</a>
    //                     )}</div>
    //                 }
    //               </li>
    //             )
    //             }
    //           </ul>
    //         </div>
    //       </div>
    //       <div classNameName='col col-md-3 col-lg-3'>
    //         <div classNameName='row'>
    //           <div classNameName='col-8'>
    //             <div className="badge rounded-pill text-bg-primary px-4 py-3 btn-color">Get Started
    //              </div>
    //           </div>
    //           <div classNameName='col-4  '>

    //             <div classNameName={'d-md-none hamburger-menu  '} onClick={() => { setIsVisible(!isVisible) }}>
    //               <AiOutlineMenu />
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //    </div>
    //   </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">  <img src={logo} alt="" /></a>

       
        
          <button className="navbar-toggler navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setIsVisible(!isVisible) }}></button>
          <button className="btn btn-primary btn-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          Get Started
         
        </button>
        
       
        <div className={`collapse navbar-collapse ${isVisible ? 'show' : ''}`} id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {MyNavBarItems.map((item) =>
              <li key={item.id} className="nav-item dropdown" onMouseEnter={() => { setDropDownMenu(item.id) }}>
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  {item.title}
                </a>
                {item?.child.length > 0 &&
                  <ul className={`dropdown-menu ${dropdownMenu === item.id ? 'show' : ''}`}>
                    {item.child.map((child) =>
                      <li>
                        <a key={child.id} className='dropdown-item'>{child.title}</a>
                      </li>
                    )}
                  </ul>}
              </li>)}
          </ul>
          

        </div>

      </div>
      {/* <div className="badge rounded-pill text-bg-primary px-4 py-3 btn-color md-d-block">Get Started
          </div> */}
    </nav>
  )
}

export default FullResponsiveNavBar
