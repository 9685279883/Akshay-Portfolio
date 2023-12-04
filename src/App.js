import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import About from './pages/About'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PText from './Components/PText';
import Footer from './Components/Footer';


export default function App() {
  return (
    
      <Router>
        <NavMenu />
        <PText/>
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path="/about" element={<About />} />
            
            <Route path='/projects' element={<Projects/>} />
            
            <Route path='/contact' element={<Contact/>}/>
            
            
        </Routes>  
       
        <Footer/>
      </Router>
      
   
  );
}
