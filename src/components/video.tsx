import React from 'react'
import {useRef,useEffect} from 'react'
const Video:React.FC = () => {
  const vidRef=useRef<any>();

useEffect(() => { 
  vidRef.current.play(); 
},[]);
  return (
    <div className='video-containr'>
        <video src="preview.mp4" 
        controls
        autoPlay
        ref={vidRef}
        muted
        ></video>
    </div>
  )
}

export default Video