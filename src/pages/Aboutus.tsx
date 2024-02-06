import React from 'react'
import Nav from '../components/nav'
import AboutUs from '../data/aboutUscard'

const Aboutus:React.FC = () => {
  return (
    <div className='about-us'>  
      <Nav/>
      <div className="about-photo">
        <h1><span >About</span> <span style={{color:"#253b70"}}>us</span></h1>
        <p>Where Tiny Minds Blossom: Nurturing Curiosity, Inspiring Creativity, and Building Futures at <b>Oxford Junior's</b></p>
      </div>
      <div className="values-content">
        <h1><span style={{color:"#253b70"}}>Our Core</span> <span style={{color:'tomato'}}> Values</span></h1>
        <p>At Oxford Juniors's, we always put the quality of teaching and caring for children first, so please rest assured when choosing our kindergarten.</p>
      </div>
      <div className="about-us-cards">
          <div className="cards-here">
            {
              AboutUs.map((about,idx)=>{
         return <div className='card'key={idx}>
                  <img className='about-card-img' src={about.img} alt=""/>
                  <h2>{about.text}</h2>
                  <p>{about.content}</p>
                </div>
              })
            }
          </div>
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
          <div className="welcome-check-parent">
          <div className="welcome-check">
            <div className="welcome-check-here">
              <div className="tick">
              <div className="tick-content">
                <img src="checkmark.svg" alt="" />
              </div>
              </div>
              <p>Supporting your child’s personality</p>
            </div>        
          </div>
          <div className="welcome-check">
            <div className="welcome-check-here">
              <div className="tick">
              <div className="tick-content">
              <img src="checkmark.svg" alt="" />
              </div>
              </div>
              <p>Professional & dedicated teachers.</p>
            </div>        
          </div>
          <div className="welcome-check">
            <div className="welcome-check-here">
              <div className="tick">
              <div className="tick-content">
              <img src="checkmark.svg" alt="" />
              </div>
              </div>
              <p>Indoor and outdoor creative games</p>
            </div>        
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus