
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import Navbar from './Navbar';
// import MainNav from './ManiNav';
import MainContent from './MainContent';
import FullResponsiveNavBar from './FullResponsiveNavBar';
// import AnimatedImage from './AnimatedImage';
// import ImageCarousel from './ImageCarousel';
import $ from 'jquery';
window.jQuery = $;
function App() {
  return (
    <div className='nav-container-wrapper'>

<FullResponsiveNavBar/>
     {/* <PracticeNavBar/>  */}
    <MainContent/>
     {/* <MainNav/> */}
        {/* <PracticeNavBar/>  */}
        {/* <FullResponsiveNavBar/> */}
        {/* <AnimatedImage/> */}
        {/* <ImageCarousel /> */}
    </div>
  
    
   
  );
}

export default App;
