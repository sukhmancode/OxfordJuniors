import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs:React.FC= () => {
  return (
    <div className='gallery'>
       <Link to={'/teacher'}>
       <p>Our Faculty</p>
      </Link>
      <Link to={'/about'}>
       <p>About</p>
      </Link>
      <Link to={'/events'}>
       <p>Events</p>
      </Link>
      <Link to={'/job'}>
       <p>Become a Teacher</p>
      </Link>
     
    </div>
  )
}

export default AboutUs