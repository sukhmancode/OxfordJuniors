import React,{useState} from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Success1 from '../components/success'

const Admission :React.FC= () => {
  const [Success,setSuccess]=useState(false)

  const openSuccess=()=>{
    setSuccess(!Success);
  }
  const submitForm=(e:any)=>{
    e.preventDefault();
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
          <div className="form-heading">
            <h1><span style={{color:"#253b70"}}>Make</span> <span style={{color:"tomato"}}>Appointment</span></h1>
          </div>
          <div className="form-admission">
            <form onSubmit={(e)=>submitForm(e)}>
                <input type="text" name="" id="" placeholder='Guardian Name' />
                <input type="text" name="" id="" placeholder='Guardian Email' />
                <input type="text" name="" id="" placeholder='Child Name' />
                <input type="text" name="" id="" placeholder='Child Age' />
                <input type="number" name="" id="" placeholder='phone' />
                <input type="submit" value="Submit"
                onClick={openSuccess} />
            </form>
            {
              Success ? <Success1/> :""
            }
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Admission