import React, { useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { FaUpload } from "react-icons/fa";
import { addDoc, collection } from 'firebase/firestore';
import { db} from '../firebase/firebase'; 
import toast from 'react-hot-toast';
import { storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const JobApply:React.FC = () => {
    interface FormData {
        FirstName:string,
        LastName:string,
        Email:string,
        Mobile:number,
        Address:string,
        City:string,
        DOB:Date | null,
        cvFile:File | null,
        cvFileUrl:string
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
        DOB:null,
        cvFile:null,
        cvFileUrl:""
    })
    const handleFileUpload = async(e:React.ChangeEvent<HTMLInputElement>) =>{
        const file=e.target.files?.[0];
        if(file){
            try{
                const storageRef=ref(storage,`resumes/${file.name}`)
                await uploadBytes(storageRef,file)

                const DownloadURL=await getDownloadURL(storageRef)
                setTeacherData({...teacherData,cvFile:file,cvFileUrl:DownloadURL})
            }
            catch(err){
                console.error('error uploading file',err)
                toast.error('failed to upload file')
            }
        }
    }
    const handleMobileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const mobileVal = e.target.value;
        const parsedMobile=parseInt(mobileVal)
        setTeacherData({...teacherData,Mobile:parsedMobile})
    }
    const handleAdd=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!teacherData.cvFile){
            toast.error('Please Upload your CV file')
            return;
        }
        try{
            await addDoc(collection(db,'TeacherData'),{
                FirstName:teacherData.FirstName,
                LastName:teacherData.LastName,
                Email:teacherData.Email,
                Mobile:teacherData.Mobile,
                Address:teacherData.Address,
                City:teacherData.City,
                DOB:teacherData.DOB,
                cvFileName:teacherData.cvFile?.name || '',
                cvFileUrl:teacherData.cvFileUrl || ''
            });
            setTeacherData({
                FirstName:"",
                LastName:"",
                Email:"",
                Address:"",
                Mobile:0,
                City:"",
                DOB:null,
                cvFile:null,
                cvFileUrl:''
            })
            toast.success('Form Successfully submitted')
        }
        catch(err){
            console.log(err)
            toast.error('An error occured! Please try again')
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
                    
                    <input type="text" placeholder='Enter First Name' onChange={(e)=>setTeacherData({...teacherData,FirstName:e.target.value})}
                    value={teacherData.FirstName}/>
                </div>
                <div className="name-input">
                    <input type="text" placeholder='Enter Last Name'
                    onChange={(e)=>setTeacherData({...teacherData,LastName:e.target.value})}
                    value={teacherData.LastName}/>
                </div>
                </div>

                <div className="email-mobile-wrapper">
                    <div className="email-wrapper">
                        <input type="email" placeholder='Enter your Email'
                        onChange={(e)=>setTeacherData({...teacherData,Email:e.target.value})} 
                        value={teacherData.Email} />
                    </div>
                    <div className="mobile-wrapper">
                        <input type="number" placeholder='Enter your Mobile'
                        onChange={handleMobileChange}
                        value={teacherData.Mobile} />
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
                     <div className="resume-upload">
                <button className='upload-btn'><label htmlFor="upload-photo"><FaUpload className='upload-icon'/>Upload CV</label></button>
                    <input type="file" name="photo" id="upload-photo" accept='.pdf,.doc,.docx'
                    onChange={handleFileUpload}/>    
                </div>
                </div>
               
                <div className='admin-logout-btn ' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <button type='submit' className=''>Submit Details</button>
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