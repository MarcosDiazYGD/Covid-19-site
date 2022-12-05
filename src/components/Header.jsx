import React from 'react';

const Header = ({video, title, description}) => {
  return (
    <div className='Header'>
      <video autoPlay loop muted className='Header--video'>
        <source src={video}/>
      </video>
      <div className='overlay'></div>
      <div className="Header--description">
        <h1 className='Header--title'>{title}</h1>
        <p className='Header--text'>{description}</p>
      </div>
    </div>
  );
};  

export default Header;