import React from 'react'
import Nav from '../components/nav'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt,FaWpforms  } from "react-icons/fa";

const Contact:React.FC= () => {
    
  return (
    <div className='contact'>
        <Nav/>
        <div className="cover-photo">
            <h1>Contact us</h1>
        </div>
        <div className="join-us-txt">
            <p>Get In Touch</p>
            <p>We encourage parents and prospective families to schedule a visit. Come experience our vibrant learning environment firsthand. Please call ahead to schedule an appointment.</p>
        </div>

        <div className="contact-icons">
            <div className="contact-location">
                <div className='icon-parent'>
                    <div className="email-icon">
                <FaLocationDot fill='tomato' size={30}/>
                     </div>
                <p>123 Street, New York, USA</p>
                </div>
            </div>

            <div className="contact-email">
                <div className='icon-parent'>
                    <div className="email-icon">
                    <MdEmail fill='tomato' size={30}/>
                    </div>
                    <p>info@example.com</p>
                </div>
            </div>
            <div className="contact-phone">
                <div className='icon-parent'>
                    <div className="email-icon">
                    <FaPhoneAlt fill='tomato' size={30}/>
                    </div>
                    <p>+012 345 6789</p>
                </div>
            </div>
        </div>

        <div className="form-area">
            <div className='form'>
            <div className='form-heading'>
            <FaWpforms size={30}/>
            <p className='fill-details-txt'> Please fill your details</p>
            </div>
            <form>
                <div className="name-email">
                    <input type="text" placeholder='Your Name'/>
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
                
            </div>
        </div>
    </div>
  )
}

export default Contact