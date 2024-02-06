import React from 'react'
import Nav from '../components/nav'

const Aboutus:React.FC = () => {
  return (
    <div className='about-us'>  
      <Nav/>
      <div className="about-photo">
        <h1>About us</h1>
        <p>Where Tiny Minds Blossom: Nurturing Curiosity, Inspiring Creativity, and Building Futures at <b>Oxford Junior's</b></p>
      </div>
      <div className="welcome-about">
        <div className="welcome-photo">
          <img src="https://res2.yourwebsite.life/res/608036965dfd14002174d27e/6087dcd8c2ca7d0021b08266_optimized_1396_c1396x930-0x0.webp" alt="" />
        </div>
        <div className="welcome-content">
          <h1>Welcome to the Oxford Junior's <span style={{color:'tomato'}}>Playway</span></h1>
          <div className="welcome-p">
            <p>Is each morning a torment for your and your children? Don't they like going to kindergarten? Everything will be different with Kidtime!</p>
          </div>

          <div className="welcome-p-content">
            <p>Children are small adults ready to explore this world. And our goal is to help them in this. At Kidtime, we help your kids learn new things while playing and prepare them for school without interfering with their creativity.</p>
          </div>
          <div className="welcome-check">
            <div className="welcome-check-here">
              <div className="tick">
              <div className="tick-content">
               <p style={{color:"#fff"}}>✔</p>
              </div>
              </div>
              <div className="tick">
              <div className="tick-content">
               <p style={{color:"#fff"}}>✔</p>
              </div>
              </div>
              <div className="tick">
              <div className="tick-content">
               <p style={{color:"#fff"}}>✔</p>
              </div>
              </div>
            </div>
            <div className="welcome-check-here"></div>
            <div className="welcome-check-here"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus