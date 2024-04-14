import React from 'react'
import { Link } from 'react-router-dom'
import { GiTeacher } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

const AboutUs:React.FC= () => {
  return (
    <div className='gallery'>
      <ul className='about-dropdown-list'>
        <Link to={'/teacher'}>
      <li><GiTeacher fill='tomato' size={30}/>Our Faculty</li>
      </Link>
      <Link to={'/about'}>
      <li><SiAboutdotme fill='tomato' size={30}/>About</li>
      </Link>
      <Link to={'/events'}>
      <li><MdEmojiEvents fill='tomato' size={30}/>Events</li>
      </Link>
      <Link to={'/job'}>
      <li><FaChalkboardTeacher fill='tomato' size={30}/>Become a Teacher</li>
      </Link>
      </ul>
    </div>
  )
}

export default AboutUs