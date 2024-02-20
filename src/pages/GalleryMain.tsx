import React, { useState,useEffect } from 'react'
import Nav from '../components/nav'
import GalleryData from '../data/galleryData'
import { GrPrevious , GrNext} from "react-icons/gr";
import { FaRegWindowClose } from "react-icons/fa";
import Footer from '../components/footer';
const GalleryMain :React.FC= () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [Slidenum,setSlidenum]=useState(1);
  const [openView,setOpenView]=useState(false)

  const handleView=(index:number)=>{
    setSlidenum(index);
    setOpenView(true);
  }
  const handlePrev=()=>{
    Slidenum===0 ? setSlidenum(GalleryData.length-1):setSlidenum(Slidenum-1)
  }
  const handleNext=()=>{
    Slidenum+1===GalleryData.length ? setSlidenum(0) : setSlidenum(Slidenum+1);
  }
  const handleBack=()=>{
    setOpenView(false);
  }
  return (
    <div className='gallery-main'>
        <Nav/>

        <div className="gallery-heading">
           <h1><span className='gallery-our'>Our</span> <span className='gallery-gallery'>Gallery</span></h1>
           <div>
          {
            openView && 
            <div className='slider-wrap'>
              <GrPrevious
               onClick={handlePrev} 
               className='btn-prev'
               size={60}/>
              <GrNext onClick={handleNext} className='btn-next'
              size={60}/>
              <FaRegWindowClose className='btn-close' onClick={handleBack}
               size={70}/>
              <div className="fullscreen-img">
                <img src={GalleryData[Slidenum].img} alt="" />
              </div>
            </div>
          }
        </div>
        </div>
      
        <div className="images">
            {
               GalleryData.map((gall,index)=>(
                <div className='image' key={gall.id}
                onClick={()=>handleView(index)}>
                <img src={gall.img} alt="" />
                </div>
               ))
            } 
        </div>
        <Footer/>
    </div>
  )
}

export default GalleryMain