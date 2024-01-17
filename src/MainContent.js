import React, { useState, useEffect } from 'react'
import ImageCarousel from './ImageCarousel';

import { banner, banner2} from './Project-images';
const MainContent = () => {
  

    const [imageAnimation, setimageAnimation] = useState(false);
    const handleAnimation = () => {
        setimageAnimation(!imageAnimation);
    }

    useEffect(() => {

        setimageAnimation(true)
        const timeoutId = setTimeout(() => {
            setimageAnimation(false);
           
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [setimageAnimation]);
   

    return (
        <div className='container'>
            <div className='row main-content'>

                <div className='col-lg-12 col-md-12 col-xl-8 main-div' >
                    <button type='button' class='btn btn-primary btn-lg upper'>#Get your 14 days free trial</button>
                    <h1>The Revolutionary App That Makes Your Life Easier Than Others Apps</h1>
                    <button type='button' class='btn btn-primary btn-lg start '>Start Free Trial</button>
                    <div className='trusted-by'>
                        <div className='row align-items-center'>
                            <div className='col-lg-2 col-md-12 '>
                                <div className='title'>Trusted by:   </div>
                             </div>
                             <div className='col-lg-10 col-md-12 images'>
                             <ImageCarousel/> 
                             </div>
                        </div>
                        <div className='col-lg-10 col-md-12 '></div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-12 col-md-12 mobile'>

                    <div className={`${imageAnimation ? "animate" : ""}`}  >
                        <img src={banner} alt='' className='img-fluid w-60 float-start animated-image' /></div>
                </div>
            </div>
            <div class="w-100 bottom-design"></div>
        </div>
    )
}

export default MainContent
