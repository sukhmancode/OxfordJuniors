import React from 'react'
import Nav from '../components/nav'
import AboutUs from '../data/aboutUscard'
import Footer from '../components/footer'
import Video from '../components/video'


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
    
          <div className="cards-here">
            {
              AboutUs.map((about,idx)=>{
         return <div className='card'key={idx} data-aos="fade-right">
                  <img className='about-card-img' src={about.img} alt=""/>
                  <div className="about-card-bg" style={{backgroundColor:about.bColor,color:'#fff'}}>
                  <h2>{about.text}</h2>
                  <p style={{color:'#fff'}}>{about.content}</p>
                  </div>
                </div>
              })
            }
        </div>
      <div className="welcome-about">
        <div className="welcome-photo" data-aos="fade-right">
          <Video/>
        </div>
        
        <div className="welcome-content" data-aos="fade-left">
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

      <div className="games" data-aos="zoom-out">
        <div className="game1">
            <img src="https://res2.yourwebsite.life/res/608036965dfd14002174d27e/6087cc4cfbf5e0002176bee2" alt="" />
            <h2>Art Classes</h2>
            <p>We will reveal your child's talents in time in our art classes</p>
        </div>
        <div className="game2">
        <img src="https://res2.yourwebsite.life/res/608036965dfd14002174d27e/6086c9fabcf12300218a6913" alt="" />
            <h2>Sport Activities</h2>
            <p>We have children's gymnastics, swimming, tennis, etc.</p>
        </div>
        <div className="game3">
        <img src="https://res2.yourwebsite.life/res/608036965dfd14002174d27e/6086c9fa73610400224f5dd8" alt="" />
            <h2>Mind Games</h2>
            <p>Games that develop the logical thinking of your kid.</p>
        </div>
        <div className="game4">
        <img src="https://res2.yourwebsite.life/res/608036965dfd14002174d27e/6086c9fac2ca7d0021aee050" alt="" />
            <h2>Table/Floor Toys</h2>
            <p>We have all your child's favorite toys! They are all completely safe.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Aboutus