import React,{useState,useEffect} from 'react'
import {FaUsers, FaFileImage, FaTeamspeak} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";import Allusers from './Allusers'
import {Timestamp, collection, getDocs} from 'firebase/firestore'
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

interface Teacher {
  id:string,
  FirstName:string,
  LastName:string,
  Mobile:number,
  Email:string,
  DOB:Timestamp,
  City:string,
  Address:string,
  cvFileUrl:string
}
const Sidebar:React.FC<SidebarProps> = ({logout}) => {
const UsercollRef = collection(db,'admissionData')
const TeacherCollRef = collection (db ,'TeacherData')

  const [showUsers,setShowUsers] = useState(false)
  const [showEventUpload,setshowEventUpload] = useState(false)
  const [userRows,setUserRows] = useState<User[]>([])
  const [showTeacherData,setshowTeacherData] = useState(false)
  const [teacherRows,showTeacherRows] = useState<Teacher[]>([])

  const handleMenuClick=(menuItem:string)=>{
    setShowUsers(false);
    setshowEventUpload(false);
    setshowTeacherData(false);
    if(menuItem==='Registered Users'){
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
    getTeacher()
  },[])

  const getTeacher = async () =>{
    try{
    const fetchQuery = await getDocs(TeacherCollRef)
    const fetchTeachers:Teacher[] = fetchQuery.docs.map((doc)=>{
      const data = doc.data();
      return {
        id:doc.id,
        FirstName:data.FirstName,
        LastName:data.LastName,
        Mobile:data.Mobile,
        Email:data.Email,
        DOB:data.DOB,
        City:data.City,
        Address:data.Address,
        cvFileUrl:data.cvFileUrl
        
      }
    });
    showTeacherRows(fetchTeachers)
  }
    catch(err){
      console.log('Fetching error')
    }
}
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
        <li onClick={()=> handleMenuClick('Registered Users')}><FaUsers size={20}/>Registered <br></br>Users</li>
        <li onClick={()=> handleMenuClick('Upload')}><FaFileImage size={20}/>Upload</li>
        <li onClick={()=> handleMenuClick('Teacher Details')}><FaTeamspeak size={20}/>Teacher<br></br> Details</li>


        </ul>
        </div>

        <div className="admin-content">
            {showUsers && <Allusers userRows={userRows}/>}
            {showEventUpload && <EventUploadForm/>}
            {showTeacherData && <TeacherDetails teacherRows= {teacherRows}/>}
        </div>

        <div className='admin-logout-btn'>
            <button onClick={logout}>Log Out</button>
        </div>
      </div>
  )

}

export default Sidebar