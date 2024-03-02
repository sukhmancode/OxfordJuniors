import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import TeacherData from '../data/teacherData'

const Teachers:React.FC = () => {
  return (
    <div className='teachers-section'>
        <Nav/>
        <div className='teacher-background'>
            <h1>Our Teachers</h1>
            <p>They are gonna help you – Just read the information down below.</p>
        </div>

        <section className="teachers">
          <p>MEET THE TEACHERS</p>
          <h1 className='teacher-heading'>Experts in giving your</h1>
          <h1 className='teacher-heading'> children best start</h1>

          <div className="teacher">
            {
              TeacherData.map((info,idx)=> (
                <div key={idx}>
                <img src={info.img} alt="" />
                <h2 className='teacher-name'>{info.name}</h2>
                <p>{info.designation}</p>
                </div>
              ))
            }
          </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Teachers