
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import MainNav from './ManiNav';
import MainContent from './MainContent';
;
function App() {
  return (
    <div className='nav-container-wrapper'>

     <Navbar/>
     {/* <PracticeNavBar/>  */}
    <MainContent/>
     {/* <MainNav/> */}
        {/* <PracticeNavBar/>  */}
    </div>
  
    
   
  );
}

export default App;
