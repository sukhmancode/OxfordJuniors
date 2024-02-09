import React from 'react'

const Video:React.FC = () => {
  return (
    <div className='video-container'>
        <video src="preview.mp4" controls></video>
    </div>
  )
}

export default Video