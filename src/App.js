
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import MainNav from './ManiNav';
import MainContent from './MainContent';
import FullResponsiveNavBar from './FullResponsiveNavBar';
;
function App() {
  return (
    <div className='nav-container-wrapper'>

<FullResponsiveNavBar/>
     {/* <PracticeNavBar/>  */}
    <MainContent/>
     {/* <MainNav/> */}
        {/* <PracticeNavBar/>  */}
        {/* <FullResponsiveNavBar/> */}
    </div>
  
    
   
  );
}

export default App;
