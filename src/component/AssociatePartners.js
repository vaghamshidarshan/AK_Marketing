import React from 'react';
import './AssociatePartners.css';
import Branding1 from '../Assets/Branding/Branding1.png';
import Branding2 from '../Assets/Branding/logo.png';
import Branding3 from '../Assets/Branding/logo313x104web.jpg';


const images = [
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
];

const AssociatePartners = () => {
    return (
        <div>
            <h2 className='sliderrHadding' style={{backgroundColor:'rgb(255 255 255 / 0%)'}}>Your trusted Health Partner for life</h2>
            <h3 className='sliderrHaddingsmall' style={{backgroundColor:'rgb(255 255 255 / 0%)'}}>Associate Partners</h3>
            
            <div className="sliderr">
                <div className="slider-track" >
                    {images.concat(Branding1,Branding2,Branding3,Branding1,Branding2,Branding3,Branding1,Branding3,Branding2,Branding3,Branding1,Branding2,Branding3).map((src, index) => (
                        <div className="slider" key={index}>
                            <img className='imgName' src={src} height="100" width="250" alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssociatePartners;
