
import React from "react";
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home.js";
import ContactMe from "./component/ContactMe.js";
import Footer from "./component/Footer.js";
import HomeSlider from './component/HomeSlider.js'
import Map from './component/Map.js'
import Service from './component/Service.js'
import AssociatePartners from './component/AssociatePartners.js'
import Certificate from './component/Certificate.js'
import NumberIncress from './component/NumberIncress.js'
import Timeline from './component/Timeline.js'
import Products from './Products/Products.js'
import Services from './component/Services.js'
import Achievement from './component/Achievement.js'
import AboutUs from './component/AboutUs.js'

function App() {
  return (
    <BrowserRouter>
    {/* 9821377214 contack number market3456 */}
      {/* WhatsApp Button, always visible */}
      <div>
        <a 
          href="https://wa.me/9821377214"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            right: '15px',
            bottom: '15px',
            zIndex:'20'
          }}
        >
          <img 
            src="https://i.ibb.co/VgSspjY/whatsapp-button.png" 
            alt=" whatsapp Logo"
          />
        </a>
      </div>

      {/* Route Components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/homeslider" element={<HomeSlider />} />
        <Route path="/map" element={<Map />} />
        <Route path="/service" element={<Service />} />
        <Route path="/associatepartners" element={<AssociatePartners />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/numberincress" element={<NumberIncress />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
