import React from 'react'
import { banner, banner2 } from './Project-images';
const MainContent = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-12' >
                    <button type='button' class='btn btn-primary btn-lg'>#Get your 14 days free trial</button>
                    <h1>The Revolutionary App That Makes Your Life Easier Than Others Apps</h1>
                    <button type='button' class='btn btn-primary btn-lg start'>Start Free Trial</button>
                </div>
                <div className='col-lg-4 col-md-12 mobile'>
                    <img src={banner} alt='' className='img-fluid w-60 float-start' />
                </div>
            </div>
            <div class="w-100 bottom-design"></div>
        </div>
    )
}

export default MainContent
