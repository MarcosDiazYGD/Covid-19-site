import React from 'react';
import SearchForCountry from '../components/SearchForCountry';
import video from '../assets/video/covidtitlewithmedicaments.mp4'
import Header from '../components/Header';

const SearchCountry = () => {
  return (
    <div className='component-searchCountry'>
      <Header 
      video={video}
      title={'consult the data in your country'}
      description={'enter the name or code of the country to consult in the search box'}
      />
      <SearchForCountry />
    </div>
  );
};

export default SearchCountry;