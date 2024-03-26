import React, {useEffect} from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share'
import lgRotate from 'lightgallery/plugins/rotate'
import lgVideo from 'lightgallery/plugins/video'
import lgAutoplay from 'lightgallery/plugins/autoplay'

const GalleryMain :React.FC= () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  return (
    <div className='gallery-main'>
        <Nav/>

        <div className="gallery-heading">
           <h1><span className='gallery-our'>Our</span> <span className='gallery-gallery'>Gallery</span></h1>
        </div>
      
      <div className='images'>
        <LightGallery
            onInit={onInit}
            speed={650}
            plugins={[lgThumbnail, lgZoom]}>
            <a className="image" href="gall-1.jpg">
                <img className='gall-image' alt="img1" src="gall-1.jpg"/>
            </a>
            <a className="image"href="gall-3.jpg">
                <img className='gall-image' alt="img2" src="gall-3.jpg" />
            </a>
            <a className="image"href="gall-4.jpg">
                <img className='gall-image' alt="img2" src="gall-4.jpg" />
            </a>  <a className="image"href="gall-5.jpg" >
                <img className='gall-image' alt="img2" src="gall-5.jpg" />
            </a> 
             <a className="image"href="gall-3.jpg">
                <img className='gall-image' alt="img2" src="gall-3.jpg" />
            </a> 
             <a className="image"href="gall-3.jpg">
                <img className='gall-image' alt="img2" src="gall-3.jpg" />
            </a> 
             <a className="image"href="gall-3.jpg">
                <img className='gall-image' alt="img2" src="gall-3.jpg" />
            </a> 
             <a className="image"href="gall-3.jpg">
                <img className='gall-image' alt="img2" src="gall-3.jpg" />
            </a>
              <a className="image"href="gall-3.jpg">
                <img className='gall-image' alt="img2" src="gall-3.jpg" />
            </a>

         
        </LightGallery>
      </div>
    
 <Footer/>
</div>
  )
}

export default GalleryMain