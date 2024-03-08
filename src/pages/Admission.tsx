import React,{useState} from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Success1 from '../components/success'
import supabase from '../config/supaClient'
import {toast} from 'react-hot-toast'
import Nav2 from '../components/nav2'
const Admission :React.FC= () => {
  interface FormData {
    Guardian_Name: string;
    Guardian_email: string;
    Child_name: string;
    Child_age: string;
    Phone: string;
  };
  console.log(supabase);
  
  interface FormErrors {
    Guardian_Name?: string;
    Guardian_email?: string;
    Child_name?: string;
    Child_age?: string;
    Phone?: string;
  }
  
  const [Success,setSuccess]=useState(false)
  const [formData,setFormData]=useState<FormData>({
    Guardian_Name:"",
    Guardian_email:"",
    Child_name:"",
    Child_age:"",
    Phone:""
  })



  const [errors, setErrors] = useState<FormErrors>({});


  const isValidEmail=(Guardian_email:any)=>{
    const emailRegex = /^\S+@\S+$/;
    return emailRegex.test(Guardian_email)
  }
  const validPhone=(Phone:any)=>{
    const phoneRegex=/^\d{10}$/;
    return phoneRegex.test(Phone)
  }
  const validateForm = (): boolean => {
    let newErrors: FormErrors = {};
  
    if (!formData.Guardian_Name.trim()) {
      newErrors.Guardian_Name = "Guardian Name is required";
    }
  
    if (!formData.Guardian_email.trim()) {
      newErrors.Guardian_email = "Email is required";
    } else if (!isValidEmail(formData.Guardian_email.trim())) {
      newErrors.Guardian_email = "Invalid email format";
    }
  
    if (!formData.Child_name.trim()) {
      newErrors.Child_name = "Child name is required";
    }
  
    if (!formData.Child_age) {
      newErrors.Child_age = "Child Age is required";
    } else if (isNaN(Number(formData.Child_age))) {
      newErrors.Child_age = "Child Age must be a number";
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
  

  const submitForm= async(e:any)=>{
    e.preventDefault();

    setTimeout(()=>{
      setSuccess(false)
    },1500)
    const isValid=validateForm()
    if(isValid){
      console.log("form submitted",formData);
      setSuccess(true)
      toast.success('Form successfully submitted')

      /*SUPABASE STARTS*/
      const {data,error} =await supabase
      .from('orders')
      .insert([formData])
  
      if(error){
        toast.error('Something went wrong')
        console.log(error)
      }
      if(data){
        console.log(data)
      }
      /*Supabase ends*/

    }else{
      console.log("form validation failed");
      setSuccess(false)
      toast.error('Please fill your details')
    }
 
  }
  const handleChange=(e:any)=>{
    const {name,value}=e.target;

    setFormData({
      ...formData,
      [name]:value
    })
  }
 
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
            <img src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63513f318476367ed06462ee_arrow.png" alt="" />
          </div>
          <div className="admission-card">
            <h1>2</h1>
            <h3>Second Step</h3>
            <p>Submit an application with the appropriate days.</p>
          </div>
          <div className="step-arrow">
            <img src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63513f318476367ed06462ee_arrow.png" alt="" />
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
            <form onSubmit={submitForm} >
              <div>
                <input type="text" 
                name='Guardian_Name'
                placeholder='Guardian Name'
                value={formData.Guardian_Name} 
                onChange={handleChange}
                />
                
                {errors.Guardian_Name &&<div className='form-error'>{errors.Guardian_Name}</div>}
                </div>
                <div>
                <input type="text"
                name="Guardian_email" 
                 id="" 
                 placeholder='Guardian Email'
                 value={formData.Guardian_email}
                onChange={handleChange}/>
              {errors.Guardian_email &&<div className='form-error'>{errors.Guardian_email}</div>}
              </div>
                <div>
                <input type="text"
                 name="Child_name"
                 id=""
                 placeholder='Child Name'
                 value={formData.Child_name}
                onChange={handleChange}/>
                
              {errors.Child_name &&<div className='form-error'>{errors.Child_name}</div>}
              </div>

                  <div>
                <input type="number" 

                name="Child_age"
                id="" 
                placeholder='Child Age'
                value={formData.Child_age}
                onChange={handleChange}/>
                
              {errors.Child_age &&<div className='form-error'>{errors.Child_age}</div>}
              </div>

                 <div>
                <input type="number"

                 name="Phone"
                 id=""
                 placeholder='Phone'
                 value={formData.Phone}
                onChange={handleChange}/>

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

export default Admission