import React from 'react'
import Nav from '../components/nav'
import { Link } from 'react-router-dom'

const Home:React.FC = () => {
  return (
    <div className='home'>
        <Nav/>
        <div className="banner">
         <div className="banner-text">
            <h1>We Create Magic For Kids</h1>
            <p>Dream is often a child’s first introduction to school. The learning library surplus of online resources help new learners transition into the scholastic world of ABCs and 123s.</p>
            <Link to={'/contact'}>
            <button>Book a Visit</button>
            </Link>
         </div>

         <div className="kid-image">
          <img src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/6329a961c0521594d3234120_portrait-smiling-little-kid-standing%201.webp" alt="" />

          <div className='ball-compo'>
            <img src="ball.png" alt="" />
          </div>
         </div>

        </div>
    </div>
  )
}

export default Home