import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { FaUpload } from "react-icons/fa";

const JobApply:React.FC = () => {
  return (
    <div className='job-apply-section'>
        <Nav/>
       <div className="job-apply-form">
        <h1>Grab your <span className='job-apply-top-txt'>Job now</span></h1>
        <div className="job-form">
            <form>
                <div className='name-input-cover'>
                <div className="name-input">
                    
                    <input type="text" placeholder='Enter First Name'/>
                </div>
                <div className="name-input">
                    <input type="text" placeholder='Enter Last Name'/>
                </div>
                </div>

                <div className="email-mobile-wrapper">
                    <div className="email-wrapper">
                        <input type="email" placeholder='Enter your Email'  />
                    </div>
                    <div className="mobile-wrapper">
                        <input type="number" placeholder='Enter your Mobile' />
                    </div>
                </div>

                <div className="address-wrapper">
                    <label>Address</label>
                    <textarea  placeholder='Enter Address'/>
                </div>

                <div className="city-dob-wrapper">
                    <div className="name-input">
                        <input type="text" placeholder='Enter your City'  />
                    </div>
                    <div className="dob-wrapper">
                        <label>DOB</label>
                        <input type="date" placeholder='Enter your Mobile' />
                    </div>
                </div>
                <div className="resume-upload">
                <button className='upload-btn'><label htmlFor="upload-photo"><FaUpload className='upload-icon'/>Upload CV</label></button>
                    <input type="file" name="photo" id="upload-photo" />    
                </div>
            </form>
        </div>
       </div>
      <div style={{marginBottom:"5rem"}}>

      </div>
    <Footer/>
    </div>
  )
}

export default JobApply