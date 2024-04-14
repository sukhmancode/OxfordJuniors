import React,{useState,useEffect} from 'react'
import {FaUsers, FaFileImage, FaTeamspeak} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";import Allusers from './Allusers'
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase/firebase';
import EventUploadForm from './EventUploadForm';
import TeacherDetails from '../pages/TeacherDetails';
interface SidebarProps{
  logout : () =>void;
}
interface User {
  id: string;
  GuardianName: string;
  GuardianEmail: string;
  ChildName: string;
  ChildAge: number;
   
  Phone: string;

}


const Sidebar:React.FC<SidebarProps> = ({logout}) => {
const UsercollRef = collection(db,'admissionData')

  const [showUsers,setShowUsers]=useState(false)
  const [showEventUpload,setshowEventUpload]=useState(false)
  const [userRows,setUserRows]=useState<User[]>([])
  const [showTeacherData,setshowTeacherData]=useState(false)

  const handleMenuClick=(menuItem:string)=>{
    setShowUsers(false);
    setshowEventUpload(false);
    setshowTeacherData(false);
    if(menuItem==='All Users'){
      setShowUsers(true)
    }
    else if(menuItem ==='Upload'){
      setshowEventUpload(true)
    }
    else if(menuItem==='Teacher Details'){
      setshowTeacherData(true)
    }
    
  } 
  useEffect(()=>{
    getUsers()
  },[])
  const getUsers = async () => {
    try {
      const fetchQuery = await getDocs(UsercollRef);
      const fetchedUsers: User[] = fetchQuery.docs.map((doc) => {
        const data = doc.data(); 
        return {
          id: doc.id,
          GuardianName: data.GuardianName || '',
          GuardianEmail: data.GuardianEmail || '',
          ChildName: data.ChildName || '',
          ChildAge: data.ChildAge || 0,
          Phone: data.Phone || '',
        };
      });
      setUserRows(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  return (
    <div className='admin-interface'>
      <div className='admin-options'>
        <ul className='admin-dash-li'>
        <div className='admin-banner'>
          <img src="admin-banner.avif" style={{width:"60px"}} />
          <p>Hello, Admin</p>
        </div>
        <li onClick={()=> handleMenuClick('Home')}><MdDashboard size={20}/>Home</li>  
        <li onClick={()=> handleMenuClick('All Users')}><FaUsers size={20}/>All Users</li>
        <li onClick={()=> handleMenuClick('Upload')}><FaFileImage size={20}/>Upload</li>
        <li onClick={()=> handleMenuClick('Teacher Details')}><FaTeamspeak size={20}/>Teacher<br></br> Details</li>


        </ul>
        </div>

        <div className="admin-content">
            {showUsers && <Allusers userRows={userRows}/>}
            {showEventUpload && <EventUploadForm/>}
            {showTeacherData && <TeacherDetails/>}
        </div>

        <div className='admin-logout-btn'>
            <button onClick={logout}>Log Out</button>
        </div>
      </div>
  )

}

export default Sidebar