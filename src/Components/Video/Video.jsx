import React, { useRef } from 'react'
import "./Video.css"
import video from "../../assets/vid.mp4"

function Video({ playState, setPlayState }) {
    
    const player = useRef(null)
    
    const closeVideo = () => {
        setPlayState(false)
        
            
        player.current.pause()
       
        
        
    }

  return (
    <div className={`video ${playState ? "" : "hide"}`} onClick={closeVideo}>
      <video src={video} autoPlay  muted controls ref={player}></video>
    </div>
  );
}

export default Video
