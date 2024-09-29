import React from 'react';
import './Certificate.css';
import Navbar from './../Navbar/Navbar';
import Certificate1 from '../Assets/Certificate/Certificate1.jpg';
import Certificate2 from '../Assets/Certificate/Certificate2.jpg';
import Certificate3 from '../Assets/Certificate/Certificate3.jpg';
import Certificate4 from '../Assets/Certificate/Certificate4.jpg';
import Certificate5 from '../Assets/Certificate/Certificate5.jpg';
import Certificate6 from '../Assets/Certificate/Certificate6.jpg';
import Certificate7 from '../Assets/Certificate/Certificate7.jpg';
import Certificate8 from '../Assets/Certificate/Certificate8.jpg';
import Certificate9 from '../Assets/Certificate/Certificate9.jpg';
import Certificate10 from '../Assets/Certificate/Certificate10.jpg';
import Certificate11 from '../Assets/Certificate/Certificate11.jpg';


function Certificate() {
  return (
    <div>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
       <div class="gallery">
          <div class="content">
            <img className='CertificateImg' src={Certificate1} alt="Certificate1"/>
            <h6>Shop Establishment<br/>Complimentary Certificate</h6>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis inventore, libero quam asperiores
            </p> */}
          </div>
          <div class="content">
            <img className='CertificateImg' src={Certificate5} alt="Certificate5"/>
            <h6>Akshar Udyam<br/>Registration</h6>
        </div>
          <div class="content">
            <img className='CertificateImg' src={Certificate6} alt="Certificate6"/>
            <h6>GST Certificate<br/>Akshar New</h6>
        </div>  
          <div class="content">
            <img className='CertificateImg' src={Certificate2} alt="Certificate2"/>
            <h6>IEC Coloured<br/>Scan</h6>
          </div>
          <div class="content">
            <img className='CertificateImg' src={Certificate7} alt="Certificate7"/>
            <h6>Akshar Marketig<br/>New MSME</h6>
        </div>
        <div class="content">
            <img className='CertificateImg' src={Certificate11} alt="Certificate11"/>
            <h6>PNDT<br/>Certificate Akshar</h6>
        </div>
          <div class="content">
            <img className='CertificateImg' src={Certificate4} alt="Certificate4"/>
            <h6>NON Conviction<br/>Certificate</h6>
        </div>
         
        
          <div class="content">
            <img className='CertificateImg' src={Certificate8} alt="Certificate8"/>
            <h6>Akshar MKT<br/>Drug Licence</h6>
        </div>
          <div class="content">
            <img className='CertificateImg' src={Certificate9} alt="Certificate9"/>
            <h6>Akshar MKT<br/>Drug Licence</h6>
        </div>
          <div class="content">
            <img className='CertificateImg' src={Certificate10} alt="Certificate10"/>
            <h6>TM Certificate<br/>AksharMKT</h6>
        </div>
          
        <div class="content">
            <img className='CertificateImg' src={Certificate3} alt="Certificate3"/>
            <h6>ISO Certificate<br/><br/></h6>
        </div>
      </div>
    </div>
  )
}

export default Certificate
