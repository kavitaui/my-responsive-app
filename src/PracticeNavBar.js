import React from 'react'
import "../src/Navbar.css"
const PracticeNavBar = () => {
    return (
        <div>


            <div className="container">
            <div className='row'>
              
                   
                        <div className="col col-lg-3 col-md-2">
                            logo
                        </div>
                        <div className='col-6  d-none col-md-8 d-md-block  col-lg-6 list '>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Pages</li>
                                <li>Shop</li>
                                <li>Block</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className=' col col-lg-3 col-md-2'>
                            sign-up
                        </div>
                    </div>
                </div>
            </div>





        )
}

export default PracticeNavBar
