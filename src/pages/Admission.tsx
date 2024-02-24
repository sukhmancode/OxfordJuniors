import React,{useState} from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Success1 from '../components/success'

const Admission :React.FC= () => {
  interface FormData {
    gName: string;
    gMail: string;
    cName: string;
    cAge: number;
    phone: string;
  };
  interface FormErrors {
    gName?: string;
    gMail?: string;
    cName?: string;
    cAge?: string;
    phone?: string;
  }
  
  const [Success,setSuccess]=useState(false)
  const [formData,setFormData]=useState<FormData>({
    gName:"",
    gMail:"",
    cName:"",
    cAge:0,
    phone:""
  })


  const [errors, setErrors] = useState<FormErrors>({});


  const isValidEmail=(gMail:any)=>{
    const emailRegex = /^\S+@\S+$/;
    return emailRegex.test(gMail)
  }
  const validPhone=(phone:any)=>{
    const phoneRegex=/^\d{10}$/;
    return phoneRegex.test(phone)
  }
  const validateForm = (): boolean => {
    let newErrors: FormErrors = {};
  
    if (!formData.gName.trim()) {
      newErrors.gName = "Guardian Name is required";
    }
  
    if (!formData.gMail.trim()) {
      newErrors.gMail = "Email is required";
    } else if (!isValidEmail(formData.gMail.trim())) {
      newErrors.gMail = "Invalid email format";
    }
  
    if (!formData.cName.trim()) {
      newErrors.cName = "Child name is required";
    }
  
    if (!formData.cAge) {
      newErrors.cAge = "Child Age is required";
    } else if (isNaN(Number(formData.cAge))) {
      newErrors.cAge = "Child Age must be a number";
    }
  
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validPhone(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log(errors);
  

  const submitForm=(e:any)=>{
    e.preventDefault();

    setTimeout(()=>{
      setSuccess(false)
    },1500)
    const isValid=validateForm()
    if(isValid){
      console.log("form submitted",formData);
      setSuccess(true)
    }else{
      console.log("form validation failed");
      setSuccess(false)
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
        <Nav/>
        <div className='admission-background'>
            <h1>Admission</h1>
            <p>We are gonna help you – Just read the information down below.</p>
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
            <form onSubmit={(e)=>submitForm(e)}>
              <div>
                <input type="text" 
                name="gName" 
                placeholder='Guardian Name'
                value={formData.gName} 
                onChange={handleChange}/>
                
                {errors.gName &&<div className='form-error'>{errors.gName}</div>}
                </div>
                <div>
                <input type="text"
                 name="gMail" 
                 id="" 
                 placeholder='Guardian Email'
                 value={formData.gMail}
                onChange={handleChange}/>
              
              {errors.gMail &&<div className='form-error'>{errors.gMail}</div>}
              </div>
                <div>
                <input type="text"
                 name="cName"
                 id=""
                 placeholder='Child Name'
                 value={formData.cName}
                onChange={handleChange}/>
                
              {errors.cName &&<div className='form-error'>{errors.cName}</div>}
              </div>

                  <div>
                <input type="text" 
                name="cAge"
                id="" 
                placeholder='Child Age'
                value={formData.cAge}
                onChange={handleChange}/>
                
              {errors.cAge &&<div className='form-error'>{errors.cAge}</div>}
              </div>

                 <div>
                <input type="number"
                 name="phone"
                 id=""
                 placeholder='phone'
                 value={formData.phone}
                onChange={handleChange}/>

              {errors.phone &&<div className='form-error'>{errors.phone}</div>}
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