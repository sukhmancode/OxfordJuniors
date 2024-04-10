import React, { useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { FaUpload } from "react-icons/fa";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import toast from 'react-hot-toast';

const JobApply:React.FC = () => {
    interface FormData {
        FirstName:string,
        LastName:string,
        Email:string,
        Mobile:number,
        Address:string,
        City:string,
        DOB:Date | null
    }
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateValue = e.target.value; 
        const parsedDate = dateValue ? new Date(dateValue) : null;
        setTeacherData({ ...teacherData, DOB: parsedDate });
    };
    const [teacherData,setTeacherData]=useState<FormData>({
        FirstName:"",
        LastName:"",
        Email:"",
        Mobile: 0,
        Address:"",
        City:"",
        DOB:null
    })
    const handleAdd=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            await addDoc(collection(db,'TeacherData'),{
                FirstName:teacherData.FirstName,
                LastName:teacherData.LastName,
                Email:teacherData.Email,
                Mobile:teacherData.Mobile,
                Address:teacherData.Address,
                City:teacherData.LastName,
                DOB:teacherData.DOB
            });
            setTeacherData({
                FirstName:"",
                LastName:"",
                Email:"",
                Address:"",
                Mobile:0,
                City:"",
                DOB:null

            })
            toast.success('Form Successfully submitted')
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div className='job-apply-section'>
        <Nav/>
       <div className="job-apply-form">
        <h1>Grab your <span className='job-apply-top-txt'>Job now</span></h1>
        <div className="job-form">
            <form onSubmit={handleAdd}>
                <div className='name-input-cover'>
                <div className="name-input">
                    
                    <input type="text" placeholder='Enter First Name'/>
                </div>
                <div className="name-input">
                    <input type="text" placeholder='Enter Last Name'
                    onChange={(e)=>setTeacherData({...teacherData,FirstName:e.target.value})}
                    value={teacherData.FirstName}/>
                </div>
                </div>

                <div className="email-mobile-wrapper">
                    <div className="email-wrapper">
                        <input type="email" placeholder='Enter your Email'
                        onChange={(e)=>setTeacherData({...teacherData,LastName:e.target.value})} 
                        value={teacherData.LastName} />
                    </div>
                    <div className="mobile-wrapper">
                        <input type="number" placeholder='Enter your Mobile' />
                    </div>
                </div>

                <div className="address-wrapper">
                    <label>Address</label>
                    <textarea  placeholder='Enter Address'
                    onChange={(e)=>setTeacherData({...teacherData,Address:e.target.value})}
                    value={teacherData.Address}></textarea>
                </div>

                <div className="city-dob-wrapper">
                    <div className="name-input">
                        <input type="text" placeholder='Enter your City' 
                        onChange={(e)=>setTeacherData({...teacherData,City:e.target.value})}
                        value={teacherData.City} />
                    </div>
                    <input
                    type="date"
                    placeholder='Enter your DOB'
                    onChange={handleDateChange}
                    value={teacherData.DOB ? teacherData.DOB.toISOString().split('T')[0] : ''}
                    />
                </div>
                <div className="resume-upload">
                <button className='upload-btn'><label htmlFor="upload-photo"><FaUpload className='upload-icon'/>Upload CV</label></button>
                    <input type="file" name="photo" id="upload-photo" />    
                </div>
            </form>
        </div>
       </div>
      <div style={{marginBottom:"5rem"}}>

      </div>
    <Footer/>
    </div>
  )
}

export default JobApply