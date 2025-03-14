import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallerypage from './pages/Gallerypage';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import Commercialpage from './pages/Commercialpage';
import Residentialpage from './pages/Residentialpage';
import Projectdetails from './pages/Projectdetails';
import Modernfurniture from './pages/Modernfurniture';
import Privacypolicypage from './pages/Privacypolicypage';
// import Sliderimage from '../components/Sliderimage';
import './App.css';




function App() {
  return (
    <div>
      
      <BrowserRouter>
    
        <Navigation />
        {/* <Sliderimage/> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/allservice' element={<Services/>}></Route>
          <Route path='/commercial' element={<Commercialpage/>}></Route>
          <Route path='/residential' element={<Residentialpage/>}></Route>
          <Route path='/project' element={<Projects/>}></Route>
          <Route path='/gallery' element={<Gallerypage/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/projectdetailspage' element={<Projectdetails/>}></Route>
          <Route path='/modernfurniture' element={<Modernfurniture/>}></Route>
          <Route path='/privacypolicy' element={<Privacypolicypage/>}></Route>
          {/* <Route path='/more' element={<More/>}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
