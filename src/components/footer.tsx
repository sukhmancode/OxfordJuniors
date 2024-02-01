import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

const Footer :React.FC= () => {
  return (
    <div className='footer'>
        <div className="address-section">
            <h2>Get In Touch</h2>
            <div className="address-area">
            <Link target='_blank' to={'https://maps.app.goo.gl/EqEZ3LRwrtakArG7A'}>
            <img className='map-image' src="map-image.png" alt="" />
                <div className='address-footer'>
                  <p><FaLocationDot size={25} color='#fff'/></p>
                  <p>199CJ+CG7,Railway Rd,Ashok Vihar</p>
                </div>
                <div className='ddress-foote'>
                  <p><FaPhone size={25} color='#fff'/></p>
                  <p></p>
                  <a href="tel:+91-94644-84438">+91-94644-84438</a>
                </div>
                <div className='address-footer'>
                  <p><MdEmail size={25} color='#fff'/></p>
                  <a href="mailto:www.oxfordjuniors.com?subject=This is an email">www.oxfordjuniors.com</a>
                </div>
                </Link>

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