import React from 'react'

import $ from 'jquery'; // Import jQuery
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { partner1, partner2, partner3, partner5, partner6 } from "./Project-images";
const ImageCarousel = () => {
  window.jQuery = $;
  const options = {
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
  };
  return (
    <>
     <OwlCarousel className="owl-theme" {...options}>
        
        <div className="item"><img src={partner1} alt="partner1" /></div>
        <div className="item"><img src={partner2} alt="" /></div>
        <div className="item"><img src={partner3} alt="" /></div>
        <div className="item"><img src={partner5} alt="" /></div>
        <div className="item"><img src={partner6} alt="" /></div>

      </OwlCarousel>
    </>
  )
}

export default ImageCarousel
