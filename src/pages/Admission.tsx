import React,{useState} from 'react'
import Footer from '../components/footer'
import Success1 from '../components/success'
import {toast} from 'react-hot-toast'
import Nav2 from '../components/nav2'
import { addDoc,collection } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const Admission :React.FC= () => {
  interface FormData {
    GuardianName: string;
    GuardianEmail: string;
    ChildName: string;
    ChildAge: string;
    Phone: string;
  }
  
  
  interface FormErrors {
    GuardianName?: string;
    GuardianEmail?: string;
    ChildName?: string;
    ChildAge?: string;
    Phone?: string;
  }
  
  const [Success,setSuccess]=useState(false)
  const [formData,setFormData]=useState({
    GuardianName:"",
    GuardianEmail:"",
    ChildName:"",
    ChildAge:"",
    Phone:""
  })



  const [errors, setErrors] = useState<FormErrors>({});

  const handleAdd = async (e:any) => {
    e.preventDefault();
  
    if (validateForm(formData)) {
      try {
        await addDoc(collection(db, 'admissionData'), {
          GuardianName: formData.GuardianName,
          GuardianEmail: formData.GuardianEmail,
          ChildName: formData.ChildName,
          ChildAge: formData.ChildAge,
          Phone: formData.Phone
        });
  
        setFormData({
          GuardianName: "",
          GuardianEmail: "",
          ChildName: "",
          ChildAge: "",
          Phone: ""
        });
  
        setSuccess(true);
        toast.success("Form successfully submitted");
      } catch (error) {
        console.error("Error adding document: ", error);
        // Handle error if necessary
      }
    } else {
      // Form validation failed, do not submit
      console.error("Form validation failed.");
    }
  };
  
  const isValidEmail=(GuardianEmail:any)=>{
    const emailRegex = /^\S+@\S+$/;
    return emailRegex.test(GuardianEmail)
  }
  const validPhone=(Phone:any)=>{
    const phoneRegex=/^\d{10}$/;
    return phoneRegex.test(Phone)
  }
  const validateForm = (formData: FormData): formData is NonNullable<FormData> =>{
    let newErrors: FormErrors = {};

    if (!formData.GuardianName.trim()) {
      newErrors.GuardianName = "Guardian Name is required";
    }
  
    if (!formData.GuardianEmail.trim()) {
      newErrors.GuardianEmail = "Email is required";
    } else if (!isValidEmail(formData.GuardianEmail.trim())) {
      newErrors.GuardianEmail = "Invalid email format";
    }
  
    if (!formData.ChildName.trim()) {
      newErrors.ChildName = "Child name is required";
    }
  
    if (!formData.ChildAge) {
      newErrors.ChildAge = "Child Age is required";
    } else if (isNaN(Number(formData.ChildAge))) {
      newErrors.ChildAge = "Child Age must be a number";
    }
  
    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone number is required";
    } else if (!validPhone(formData.Phone.trim())) {
      newErrors.Phone = "Invalid Phone number";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log(errors);

  return (
    <div className='admission'>
        <div className='admission-background'>
        <Nav2/>
        <div className="admission-text">
            </div>
        </div>

        <div className="appoint-head">
          <h1>We Look Forward To <span> Seeing You</span></h1>
        </div>

        <div className="admission-steps">
          <div className="admission-card">
            <h1>1</h1>
            <h3>First Step</h3>
            <p>Visit KinderGarten during an Open House.</p>
          </div>
          <div className="step-arrow">
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63513f318476367ed06462ee_arrow.png" alt="" />
          </div>
          <div className="admission-card">
            <h1>2</h1>
            <h3>Second Step</h3>
            <p>Submit an application with the appropriate days.</p>
          </div>
          <div className="step-arrow">
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63513f318476367ed06462ee_arrow.png" alt="" />
          </div>
          <div className="admission-card">
          <h1>3</h1>
            <h3>Third Step</h3>
            <p>Look the annual calendar in our kindergarten.</p>
          </div>
        </div>
        <div className="make-appointment">
          <div className="form-heading1">
            <h1><span style={{color:"#253b70"}}>Make</span> <span style={{color:"tomato"}}>Appointment</span></h1>
          </div>
          <div className="form-admission">
            <form onSubmit={handleAdd}>
              <div>
              <input
                type="text"
                placeholder="Guardian Name"
                value={formData.GuardianName}
                onChange={(e) => setFormData({ ...formData, GuardianName: e.target.value })}
              />
                {errors.GuardianName &&<div className='form-error'>{errors.GuardianName}</div>
                }
                </div>
                <div>
                <input type="text"
           
                 id="" 
                 placeholder='Guardian Email'
                 value={formData.GuardianEmail}
                 onChange={(e)=>setFormData({...formData,GuardianEmail:e.target.value})}
              />
              {errors.GuardianEmail &&<div className='form-error'>{errors.GuardianEmail}</div>}
              </div>
                <div>
                <input type="text"
                 id=""
                 placeholder='Child Name'
                 value={formData.ChildName}
                 onChange={(e)=>setFormData({...formData,ChildName:e.target.value})}
              />
              {errors.ChildName &&<div className='form-error'>{errors.ChildName}</div>}
              </div>

                  <div>
                <input type="number" 
                id="" 
                placeholder='Child Age'
                value={formData.ChildAge}
                onChange={(e)=>setFormData({...formData,ChildAge:e.target.value})}
              />
                
              {errors.ChildAge &&<div className='form-error'>{errors.ChildAge}</div>}
              </div>
                 <div>
                <input type="number"
                 id=""
                 placeholder='Phone'
                 value={formData.Phone}
                 onChange={(e)=>setFormData({...formData,Phone:e.target.value})}
                />
              {errors.Phone &&<div className='form-error'>{errors.Phone}</div>}
             </div>
                <input type="submit" value="Submit" />
            </form>
            {
              Success ? <Success1/> :null
            }
          </div>
        </div>
        <Footer/>
    </div>
  )
   }


export default Admission;