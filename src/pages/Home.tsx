import React, { useEffect } from 'react'
import Nav from '../components/nav'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

const Home:React.FC = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='home'>
        <Nav/>
        <div  className="banner">
         <div className="banner-text" data-aos="fade-right">
            <h1>"<span style={{color:'tomato'}}>Nurturing</span> young minds with Oxford's <small className='head-small'>academic <span style={{textDecoration:"line-through",color:'tomato',textDecorationLine:'black'}}>excellence</span>".</small></h1>
            <p>Dream is often a child’s first introduction to school. The learning library surplus of online resources help new learners transition into the scholastic world of ABCs and 123s.</p>
            <Link to={'/contact'}>
            <button>Book a Visit</button>
            </Link>
         </div>

         <div className="kid-image" data-aos="fade-left">
          <img loading='lazy' className='kid-img-main' src="kid-image.png" alt="" />
{/*
          <div className='ball-compo'>
            <img loading='lazy' src="ball.png" alt="" />
            <p>Funny Games</p>
          </div>

          <div className='teacher-compo'>
            <img loading='lazy' src="teacher.png" alt="" />
            <p>Pro Teachers</p>
          </div>
  */}
         </div>
       </div>

       <section className='features-section'>
          <div className="heading" data-aos="fade-down">
         <p>We Are <span className='tomato'>Oxford</span> Junior's And Childhood Is Our <span className='tomato'>Passion</span>.</p>
          </div>
          <div className="feature-para" data-aos="fade-right">
            <p>We are excited and pleased to introduce you to the wonderful, passionate and committed educators who are working at <b>Oxford Juniors,kapurthala.</b> Please take a moment to meet “Our Family!” We invited each of them to describe why they love working with children.</p>
          </div>

          <div className="feature-cards" >
            <div className="environment-card"data-aos="zoom-in" >
              <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/632b01ca79ecfda9e10826fd_9443147_young_man_young%20man_cool%20boy_happy%20boy_icon%201%20(3)%201.png" alt="" />
              <div className='environment-card-p'>
              <h3 style={{color:"#fff"}}>Home-like Environment</h3>
              <p className='p-white'>We create for children an home-like place so that your children come here with pleasure.</p>
              </div>
            </div>

            <div className="environment-card" data-aos="zoom-in">
              <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/632b023a31836d27e3e3bab4_8721663_lock_security_protect_secure_icon%201%20(8).png" alt="" />
              <div className='environment-card-p'>
              <h3>Safety and Security</h3>
              <p>Safety is above all else. We pay special attention to this. Special room plans have been developed.</p>
              </div>
            </div>

            <div className="environment-card" data-aos="zoom-in">
              <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/632b0346f5762dd76c219ea1_9254052_certificate_degree_diploma_ribbon%20badge_quality_icon%201%20(3).png" alt="" />
              <div className='environment-card-p'>
              <h3 style={{color:"#fff"}}>Quality Educators</h3>
              <p className='p-white'>A child in kindergarten will not only have fun and relax but also develop. We learn in the form of games.</p>
              </div>
            </div>

            <div className="environment-card" data-aos="zoom-in">
              <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/632b034598f8dcb8e04e871e_9053991_leisure_dice_gambling_gamble_casino_icon%201%20(3).png" alt="" />
              <div className='environment-card-p'>
              <h3>Play to Learn</h3>
              <p>As we said learn and play. In this way, we encourage the child to learn from an early age.</p>
              </div>
            </div>
          </div>

          <div className="learn-more-btn" data-aos="zoom-in">
            <Link to={'/about'}>
            <button>Learn More</button>
            </Link>
           </div>
       </section>

       <section className="oppurtunity-section" data-aos="zoom-in">
          <div className="oppurtunity-heading">
            <p>We Provide Your Child <span className='opp-head'>With An Opportunity</span></p>
          </div>

          <div className="all-features">
          <div className="oppurtunity-features">
            <div className='oppurtunity-image'>
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63315d7c199d5e4d9def4a91_9428043_basketball_game_sports_play_icon%203.webp" alt="" />
            </div>
            <div className="oppurtunity-feature">
              <h3>Professional Teachers</h3>
              <p>"Guiding Tiny Steps towards Big Dreams"</p>
            </div>
          </div>

          
          <div className="oppurtunity-features">
            <div className='oppurtunity-image'>
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63315b5f29b5ad319ca83ef2_7923951_book_reading_school_education_library_icon%202.webp" alt="" />
            </div>
            <div className="oppurtunity-feature">
              <h3>Education Program</h3>
              <p>"Building Bright Futures  Futures Futures"</p>
            </div>
          </div>

          <div className="oppurtunity-features">
            <div className='oppurtunity-image'>
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63315b609942dbfcf2753083_9213103_toy_play_game_kids_education_icon%201.webp" alt="" />
            </div>
            <div className="oppurtunity-feature">
              <h3>Funny Games</h3>
              <p>"Playful Pals and Giggles Galore Galore"</p>
            </div>
          </div>

            
          <div className="oppurtunity-features">
            <div className='oppurtunity-image'>
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63315b5c24771a33d8879876_7923951_book_reading_school_education_library_icon%203.webp" alt="" />
            </div>
            <div className="oppurtunity-feature">
              <h3>Sport Program</h3>
              <p>"Guiding Tiny Steps towards Big dream"</p>
            </div>
          </div>

          <div className="oppurtunity-features">
            <div className='oppurtunity-image'>
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63315b5ed50e5cb0deebc079_9213103_toy_play_game_kids_education_icon%201%20(1).webp" alt="" />
            </div>
            <div className="oppurtunity-feature">
              <h3>Easy To Learn</h3>
              <p>"Guiding Tiny Steps towards Big Dreams"</p>
            </div>
          </div>

          <div className="oppurtunity-features">
            <div className='oppurtunity-image'>
            <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63315b5d2e4695673c8cc0fb_9428043_basketball_game_sports_play_icon%204.webp" alt="" />
            </div>
            <div className="oppurtunity-feature">
              <h3>Easy To Learn</h3>
              <p>"Guiding Tiny Steps towards Big Dreams"</p>
            </div>
          </div>
          </div>
       </section>

       <section className='look-around-section'>
        <div className="look-around-img" data-aos="fade-right">
          <img loading='lazy' src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63316f6e540a10031a2d0c6e_8969101_smartphone_childhood_toys_kids_icon%201.webp" alt="" />
        </div>
        <div className="look-around-para" data-aos="fade-left">
          <h2>Come Over And <span style={{color:"#253b70"}}>Look Around</span></h2>
          <p>We will explain everything you are interested. Join our new session. If you have any questions or enquiries please feel free to contact us on the following details provided below or alternatively you can complete our online enquiry form also located below and we will get back to you as soon as possible…</p>

          <div className="look-around-btns">
            <Link to={'/admission'}>
            <button>Book A Visit</button>
            </Link>
            <Link to={'/contact'}>
            <button>Let's Get in Touch</button>
            </Link>
          </div>
        </div>
       </section>

       <Footer/>
    </div>
  )
}

export default Home