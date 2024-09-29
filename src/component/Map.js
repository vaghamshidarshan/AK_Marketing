import React from 'react'
import './Map.css'


function Map() {
  return (
    <div>
   
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43912.636676592534!2d72.75011662379757!3d19.371733300000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aff83c6edf89%3A0x3b32fcac1b97bba9!2sAkshar%20Marketing!5e1!3m2!1sen!2sin!4v1724525968350!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
    
    </div>
  )
}

export default Map
