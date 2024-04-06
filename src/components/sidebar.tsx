import React,{useState} from 'react'
import {FaUsers, FaFileImage} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";import Allusers from './Allusers'

const Sidebar:React.FC = () => {
  const [showUsers,setShowUsers]=useState(false)

  const handleMenuClick=(menuItem:string)=>{
    if(menuItem==='All Users'){
      setShowUsers(true)
    }else{
      setShowUsers(false)
    }
  } 
  return (
    <div className='admin-interface'>
    <div style={{position:"fixed",left:"0",border:"1px solid #ccc",height:'100vh'}}>
        <ul className='admin-dash-li'>
          <div className='admin-banner'>
        <img src="admin-banner.avif"  />
        </div>
        <li onClick={()=> handleMenuClick('Home')}><MdDashboard/>Home</li>  
        <li onClick={()=> handleMenuClick('All Users')}><FaUsers/>All Users</li>
        <li onClick={()=> handleMenuClick('Upload')}><FaFileImage/>Upload</li>
        </ul>
        </div>

        <div className="admin-content">
          {showUsers ? (<Allusers/>):(
            <div>
              <p></p>
            </div>
          )}
        </div>
      </div>
  )

}

export default Sidebar