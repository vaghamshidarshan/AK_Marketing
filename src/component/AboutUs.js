import React from 'react';
import './AboutUs.css'
import Navbar from '../Navbar/Navbar';
import backgroundImage from '../Assets/WhatsAppImage.jpg';


function AboutUs() {
  return (
    <div>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="container-fluid" >
        <div className="row d-sm-flex align-items-center justify-content-between" id='maincontainaboutus'>
          <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5" >
            <div className="p-0 p-sm-5" >
              {/* <small className="text-uppercase" style={{ color: '#9B5DE5' }}>subheadline</small> */}
              <h1 className="mb-4 display-6" style={{ fontWeight: 500, color: "#06069f",fontFamily: "ui-serif", textAlign:"center" }}>
              WHO ARE WE <span style={{ color: '#c60505' }}>?</span>
              </h1>
              <p className="text-secondary" style={{ lineHeight: 2, color: "#000" }}>

             <li>  Founded in 2002, AKSHAR MARKETING has consistently achieved annual growth exceeding 50%. Our company continues to expand its portfolio of manufacturers and diversify its areas of expertise.
             </li>
              

    <li>
    We have established a strong presence across government institutions and railway hospitals in India, and maintain a robust network of key opinion leaders in the medical field, including doctors.
    </li>

<li>

Our reputation is built on reliability, ethical business practices, and delivering the highest standards of performance.
</li>
<li>

Our foremost commitment is to the patients, doctors, and nurses we serve, and everything we do is centered around providing the highest quality in addressing patient needs.
</li>
<li>

We are dedicated to our employees across the country, fostering a work environment where they feel valued and secure. We believe in nurturing their skills and contributions as integral members of the AKSHAR MARKETING family.
</li>
              </p>
            
            </div>
          </div>
          <div className="w-10 col-md-6 order-1 order-sm-2"  style={{
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
    minHeight: '400px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginBottom:"90px"
  }}
></div>

          </div>
      </div>


    </div>
  );
}

export default AboutUs;
