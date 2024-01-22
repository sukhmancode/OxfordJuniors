import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer :React.FC= () => {
  return (
    <div className='footer'>
        <div className="address-section">
            <h2>Get In Touch</h2>
            <div className="address-area">
                <div><FaLocationDot/> <p>123 Street, New York, USA</p></div>
                <div><FaLocationDot/> <p>123 Street, New York, USA</p></div>
                <div><FaLocationDot/> <p>123 Street, New York, USA</p></div>
            </div>
            <div className="footer-links">
                <div className="facebook"><FaFacebookF color='#fff' size={20}/></div>
                <div className="facebook"><FaTwitter color='#fff' size={20}/></div>
                <div className="facebook"><FaLinkedinIn color='#fff' size={20}/></div>
            </div>
        </div>

        <div className="address-section">
            <h2>Quick Links</h2>
            <div className="address-area">
              <div>&gt;<p>About Us</p></div>
              <div>&gt;<p>Contact Us</p></div>
              <div>&gt;<p>Our Services</p></div>
              <div>&gt;<p>Privacy Policy</p></div>
              <div>&gt;<p>Terms & Condition</p></div>
              
            </div>
        </div>

        <div className="address-section">
            <h2>Photo Gallery</h2>
            <div className="img-area">
              <img src="https://themewagon.github.io/kider/img/classes-1.jpg" alt="" />
              <img src="https://themewagon.github.io/kider/img/classes-2.jpg" alt="" />
              <img src="https://themewagon.github.io/kider/img/classes-3.jpg" alt="" />
              <img src="https://themewagon.github.io/kider/img/classes-4.jpg" alt="" />
              <img src="https://themewagon.github.io/kider/img/classes-5.jpg" alt="" />
              <img src="https://themewagon.github.io/kider/img/classes-6.jpg" alt="" />
            </div>
        </div>

        <div className="address-section">
            <h2>Newsletter</h2>
            <div className="address-area">
                <p className='news-letter'>We have exciting updates and highlights to share from our wonderful kindergarten community.</p>
                <input className='newsletter-input' type="text" placeholder='Your email' />
                <button className='newsletter-btn'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Footer