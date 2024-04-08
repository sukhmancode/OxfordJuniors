import React,{useState,useEffect} from 'react'
import {FaUsers, FaFileImage} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";import Allusers from './Allusers'
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase/firebase';
import EventUploadForm from './EventUploadForm';
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

  const handleMenuClick=(menuItem:string)=>{
    if(menuItem==='All Users'){
      setShowUsers(true)
    }
    else if(menuItem ==='Upload'){
      setShowUsers(false)
      setshowEventUpload(true)
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
          <img src="admin-banner.avif"  />
          <p>Hello,Admin</p>
          </div>
        <li onClick={()=> handleMenuClick('Home')}><MdDashboard size={20}/>Home</li>  
        <li onClick={()=> handleMenuClick('All Users')}><FaUsers size={20}/>All Users</li>
        <li onClick={()=> handleMenuClick('Upload')}><FaFileImage size={20}/>Upload</li>
        </ul>
        </div>

        <div className="admin-content">
  {showUsers ? (
    <Allusers userRows={userRows} />
  ) : showEventUpload ? (
    <div>
      <EventUploadForm />
    </div>
  ) : (
    <div>
      <p>Hello User</p>
    </div>
  )}
</div>

        <div className='admin-logout-btn'>
            <button onClick={logout}>Log Out</button>
        </div>
      </div>
  )

}

export default Sidebar