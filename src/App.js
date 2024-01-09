
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import PracticeNavBar from './PracticeNavBar';
import MainContent from './MainContent';
function App() {
  return (
    <div className='nav-container-wrapper'>

     <Navbar/>
     {/* <PracticeNavBar/>  */}
     <MainContent/>
    </div>
  
    
   
  );
}

export default App;
