import React from 'react';
import images from '../assets/image/slider/imagesSlider'

const Slider = () => {
  return (
    <div className='principal-container'>
      <div className='container-slide'>

        <div className='slide'>
          <img src={images.image2} />
          <div className='Text-slide'>
            <h1>DESINFECT THE HOUSE</h1>
            <p>disinfect the objects of your house with alcohol</p>
          </div>
        </div>

        <div className='slide'>
          <img src={images.image3} />
          <div className='Text-slide'>
            <h1>GET VACCINATED</h1>
            <p>Get vaccinated when it's your turn.Follow the vaccination guidelines of your local authorities.</p>
          </div>
        </div>

        <div className='slide'>
          <img src={images.image4} />
          <div className='Text-slide'>
            <h1>HAND WASHING</h1>
            <p>Wash your hands frequently. Use soap and water or an alcohol-based hand sanitizer.</p>
          </div>
        </div>

      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Slider;

//https://youtu.be/q00ldTrywLU?t=1772