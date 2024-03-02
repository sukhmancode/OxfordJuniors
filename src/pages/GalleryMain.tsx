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
// import lgShare from 'lightgallery/plugins/share'
// import lgRotate from 'lightgallery/plugins/rotate'
// import lgVideo from 'lightgallery/plugins/video'
// import lgAutoplay from 'lightgallery/plugins/autoplay'

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
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <a className="image" href="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/6335846c5dfd6574c12e5031_image%20(19)-p-500.webp">
                <img className='image' alt="img1" src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/6335846c5dfd6574c12e5031_image%20(19)-p-500.webp" />
            </a>
            <a className="image"href="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63510a1c63792dc57bd6fb63_image-p-500.webp">
                <img className='image' alt="img2" src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/63510a1c63792dc57bd6fb63_image-p-500.webp" />
            </a>
            <a className="image"href="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/6333f8227528e33c67a3e359_gallery%20image.webp">
                <img className='image' alt="img2" src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/6333f8227528e33c67a3e359_gallery%20image.webp" />
            </a>
            <a className="image"href="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/6333f549547199356096a919_gallery%20image-p-500.webp">
                <img className='image' alt="img2" src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/6333f549547199356096a919_gallery%20image-p-500.webp" />
            </a>
            <a className="image"href="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/634d386e8eff795b8533333c_krakenimages-Br-ayoAxFuQ-unsplash-p-500.webp">
                <img className='image' alt="img2" src="https://assets-global.website-files.com/63297a6e0db55f763a6d4d9a/634d386e8eff795b8533333c_krakenimages-Br-ayoAxFuQ-unsplash-p-500.webp" />
            </a>
        </LightGallery>
      </div>
 <Footer/>
</div>
  )
}

export default GalleryMain