// DISABLED
import React from 'react';
const CardTip = ({title , description, CardTipReverse }) => {
  return (
    <div className={`CardTip ${CardTipReverse}`}>
      <div className='card-container-video'>
      </div>
      <div className='card-container-info'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardTip;
