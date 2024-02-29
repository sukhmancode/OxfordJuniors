import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs:React.FC= () => {
  return (
    <div className='gallery'>
      <Link to={'/events'}>
       <p>Events</p>
      </Link>

      <Link to={'/teacher'}>
       <p>Our Teachers</p>
      </Link>
    </div>
  )
}

export default AboutUs