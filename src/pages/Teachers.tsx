import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Teachers:React.FC = () => {
  return (
    <div className='teachers-section'>
        <Nav/>
        <div className="teacher-heading">
          <h1>Meet Our Faculty</h1>
          <p></p>
        </div>

        <Footer/>
    </div>
  )
}

export default Teachers