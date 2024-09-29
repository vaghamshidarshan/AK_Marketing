import React, { useState } from 'react';
import './Navbar.css'; 
import Logo from '../Assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navigation-wrap bg-light start-style">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="https://front.codes/" target="_blank" rel="noopener noreferrer">
                <img src={Logo} alt="logo" />
              </a>

              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleMenu}
                aria-controls="navbarSupportedContent" 
                aria-expanded={showMenu} 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto py-4 py-md-0">
                <NavLink exact to={`/`}>
                  <li className="nav-item pl-4 pl-md-0">
                    <a className="nav-link" href="/" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                  </li>
                  </NavLink>
                  <NavLink exact to={`/Products`}>
                  <li className="nav-item pl-4 pl-md-0">
                    <a className="nav-link">Products</a>
                  </li>
                  </NavLink>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" to="/Certificate">Certificate</Link>
                  </li>
                  {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href='/Services' role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                  </li> */}
                  <NavLink exact to={`/Achievement`}>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" >Achievement</a>
                  </li>
                  </NavLink>
                  <NavLink exact to={`/AboutUs`}>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" >AboutUs</a>
                  </li>
                  </NavLink>
                  <NavLink exact to={`/contact`}>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" >Contact</a>
                  </li>
                  </NavLink>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


