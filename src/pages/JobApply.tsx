import React from 'react'
import Nav from '../components/nav'

const JobApply:React.FC = () => {
  return (
    <div className='job-apply-section'>
        <Nav/>
        <div className="job-hero">
            <div className="job-img">
                <img src="teacher-guide.gif" alt="" />
            </div>
            <div className="job-description">
                <h1>Join Our Kindergarten Family: Make a Difference in Young Lives!</h1>
                <p>Is there a specific way you're thinking about using "kind" today? Perhaps you'd like some examples of kind acts or kind people? Let me know how I can help you explore the concept of kindness further.</p>
                <div className='teacher-input'>
                    <input type="text" placeholder='Enter your email' className='teacher-inputs'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobApply