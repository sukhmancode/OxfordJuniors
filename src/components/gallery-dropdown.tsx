import React from 'react'
import { Link } from 'react-router-dom'
import { PiGooglePhotosLogoDuotone } from "react-icons/pi";
const Gallery:React.FC= () => {
  return (
    <div className='gall-dropdown'>
      <ul className='about-dropdown-list'>
        <Link to={'/gallery'}>
         <li><PiGooglePhotosLogoDuotone fill='tomato' size={31} />Photos</li>
        </Link>
      </ul>
    </div>
  )
}
          
export default Gallery