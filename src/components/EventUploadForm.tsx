import React,{useState} from 'react'
import {FaUpload} from 'react-icons/fa'
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage';
import 'firebase/storage';
import {v4 as uuidv4} from 'uuid'
import { db, imgDb } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
const EventUploadForm:React.FC = () => {


    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState<File| null>(null)

    
    const handleImageUpload=(e: React.ChangeEvent<HTMLInputElement>) => {
        const file=e.target.files?.[0]; 
        if (file) {
          setImage(file);
        }
      };
    const handleEventUpload=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(!title || !description || !image){
           toast.success('please fill in all details')
            return;
        }
        try{
            const imageName = `${image.name}-${uuidv4()}`;
            const imgs=ref(imgDb,`images/${imageName}`)
            await uploadBytes(imgs,image)

            const imageUrl=await getDownloadURL(imgs);
            await addDoc(collection(db,'eventsData'),{
                title:title,
                description:description,
                imageUrl:imageUrl
            })
            console.log(imageUrl);
            toast.success('Image Uploaded Successfully')
            
            setTitle('')
            setDescription('')

        }
        catch(err){
            console.log(err);
            toast.error('Image Uploading failed') 
        }
    }
  return (
    <div>
        <div className="event-upload-form-heading">
            <h1 style={{textAlign:"center"}}>Enter the Details</h1>
        </div>
        <form className='event-upload-form' onSubmit={handleEventUpload}>
            <label htmlFor="">Enter Title</label>
            <input type="text" name="" id=""
            onChange={(e)=>setTitle(e.target.value)}
            value={title}/>
            <label htmlFor="">Enter Description</label>
            <textarea name="" id=""
            onChange={(e)=>setDescription(e.target.value)}
            value={description}></textarea>
            <label htmlFor="">Upload Image</label>
            <div className="image-upload">
                <button className='upload-btn'><label className='upload-photo' htmlFor="upload-photo">
                    <FaUpload className='upload-icon'/>Upload Image</label>
                    </button>
                    <input type="file" name="photo" id="upload-photo"
                    onChange={(e)=>handleImageUpload(e)} />    
                </div>
            <div className="admin-logout-btn event-upload-btn">
                <button type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default EventUploadForm