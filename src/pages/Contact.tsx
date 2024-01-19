import React from 'react'
import Nav from '../components/nav'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


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
                <div>
                <FaLocationDot fill='tomato' size={30}/>
                </div>
            </div>

            <div className="contact-email">
                <div className="email-icon">
                    <MdEmail fill='tomato' size={30}/>
                </div>
            </div>
            <div className="contact-phone">
                <div className="contact-icon">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact