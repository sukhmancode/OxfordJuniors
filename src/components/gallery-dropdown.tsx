import React from 'react'
import { Link } from 'react-router-dom'

const Gallery:React.FC= () => {
  return (
    <div className='gallery'>
      <Link to={'/gallery'}>
       <p>Photos</p>
      </Link>
       <p>Videos</p>
    </div>
  )
}
          
export default Gallery