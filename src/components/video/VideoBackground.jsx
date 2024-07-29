import React from 'react';
import { HeroVideo } from '../../assets';
import './video.css'

const VideoBackground = () => {
  return (
  <div className='bgContainer'>
  <div className='overlay'>
  <video src={HeroVideo} autoPlay loop muted />
  </div>
  </div>
  );
}

export default VideoBackground;
