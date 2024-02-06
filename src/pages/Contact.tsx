import React from 'react';
import Nav from '../components/nav';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWpforms } from "react-icons/fa";
import Footer from '../components/footer';

const Contact: React.FC = () => {
  return (
    <div className='contact'>
      <Nav />
      <div className="cover-photo">
        <h1>Contact us</h1>
        <p>Connecting Dreams, Building Relationships: Where Your Journey Begins with Us</p>
      </div>
      <div className="join-us-txt">
        <p>Get In Touch</p>
        <p>We encourage parents and prospective families to schedule a visit. Come experience our vibrant learning environment firsthand. Please call ahead to schedule an appointment.</p>
      </div>

      <div className="contact-icons">
        <div className="contact-location">
          <div className='icon-parent'>
            <div className="email-icon">
              <FaLocationDot fill='tomato' size={30} />
            </div>
            <p>123 Street, New York, USA</p>
          </div>
        </div>

        <div className="contact-email">
          <div className='icon-parent'>
            <div className="email-icon">
              <MdEmail fill='tomato' size={30} />
            </div>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="contact-phone">
          <div className='icon-parent'>
            <div className="email-icon">
              <FaPhoneAlt fill='tomato' size={30} />
            </div>
            <p>+012 345 6789</p>
          </div>
        </div>
      </div>

      <div className="form-area">
        <div className='form'>
          <div className='form-heading'>
            <FaWpforms size={30} />
            <p className='fill-details-txt'> Please fill your details</p>
          </div>
          <form>
            <div className="name-email">
              <input type="text" placeholder='Your Name' />
              <input type="text" placeholder='Age of Child' />
            </div>
            <div className='subjects'>
              <input type="text" placeholder='Subject' />
              <textarea placeholder='Message'></textarea>
            </div>
            <div>
              <input type="submit" value={'Send Message'} />
            </div>
          </form>
        </div>
        <div className="map">
          <iframe
            style={{ border: "0",borderRadius:"8px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.560262579431!2d75.37853867506323!3d31.3711117545022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a49ae83c1db8d%3A0xdc0420c8d2d42092!2sOxford%20Juniors%20School%2CKapurthala!5e0!3m2!1sen!2sin!4v1705814531200!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Contact;
