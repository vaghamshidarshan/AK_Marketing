import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from '../component/Footer';
import './Home.css'
import HomeSlider from "../component/HomeSlider";
import Map from '../component/Map'
import Service from "../component/Service";
import AssociatePartners from '../component/AssociatePartners.js'
import NumberIncress from '../component/NumberIncress.js'
import Timeline from './../component/Timeline';

function Home() {
  return (
    <div className="App">
    <header id="NavbarApp">
      <Navbar />
    </header>
    <div className="HomePage">
      <HomeSlider />
    </div> 
    <br/>
    <br/>
    <br/>
    <div className="NumberIncress">
    <NumberIncress/>
    </div>
    <br/>
    <br/>
    <br/>
    <div className="MovingCard">
    <AssociatePartners/>
    </div>
    <div className="Timeline">
    <Timeline/>
    </div>
    <div id="service">
    <Service /> 
    </div>
      {/* <ContactMe/> */}
      <div className="map">
      <Map/> 
      </div>
    <footer className="footer">
      <Footer />
    </footer>
  </div>
  );
}

export default Home;