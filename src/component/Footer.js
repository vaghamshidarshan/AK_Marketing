import './Footer.css'; 
import Logo from '../Assets/logo.png';

export default function Footer() {      
    return (
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>
            <img src={Logo} className='newnavLogo' alt="logo"/>
            </h3>
            <p>
            JMS Products Healthcare Products Dialysis Products
            Surgical Disposable Products
            Criticare Products
            Radiology Products
            Diabetic Foot Care Products
            Ophthalmology Products  
            </p>
            <p>
            HSIL has been an adopter of a strong CRS activity. The continuous demonstration of delivery of quality of healthcare products in the marginalized communities infuse the belief that community participation can bring change.
            </p>
          </div>
          <div className="footer__col">
            <h2 className='contactuss'>Contact Us</h2>
            <p><i className="ri-map-pin-2-fill"></i> 123, London Bridge Street, vasai</p>
            <p><i className="ri-mail-fill"></i> Darshan@care.com</p>
            <p><i className="ri-phone-fill"></i> (+012) 7030732416</p>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__bar__content">
          <br></br>
                <p>Copyright © 2024 Web Design Mastery. All rights reserved.</p>
            <div className="footer__socials">
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
            </div>
          </div>
        </div>
      </footer>
      
    );
  }