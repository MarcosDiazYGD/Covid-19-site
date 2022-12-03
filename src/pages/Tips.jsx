import React from 'react';
import Header from '../components/Header';
import video from '../assets/video/faceMask.mp4'
import Slider from '../components/Slider';

const Tips = () => {
  return (
    <>
      <Header video={video} title={`tips to protect yourself against covid-19`} description={`find the recommendations to protect yourself and protect others`}/>
        <Slider />
      <div className='Component-Tips'>
      </div>
    </>
  );
};

export default Tips;