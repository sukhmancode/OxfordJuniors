import React from 'react'
import { Link } from 'react-router-dom'
import { PiGooglePhotosLogoDuotone } from "react-icons/pi";
import { LiaVideoSolid } from "react-icons/lia";
const Gallery:React.FC= () => {
  return (
    <div className='gall-dropdown'>
      <ul className='about-dropdown-list'>
        <Link to={'/gallery'}>
        <li><PiGooglePhotosLogoDuotone fill='tomato' size={30} />Photos</li>
        </Link>
        <li><LiaVideoSolid fill='tomato' size={30}/>Videos</li>
      </ul>
    </div>
  )
}
          
export default Gallery