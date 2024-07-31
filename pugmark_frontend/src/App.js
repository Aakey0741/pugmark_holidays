import React from 'react';
import ShortHeader from './ShortHeader';
import './App.css';

import Navigation from './Navigation';
import BannerSlider from './BannerSlider';
import AboutUs from './AboutUs';
import WeAreBest from './WeAreBest';
import TourPackages from './TourPackages';
import TourType from './TourType';
import TopPlaces from './TopPlaces';
import Reviews from './Reviews';
import Footer from './Footer';
import Gallary from './Gallary';

function App() {

  return (
    <>
      <div>
        <div className='sticky-top'>
          <ShortHeader />
          <Navigation />
        </div>
        <BannerSlider />
        <AboutUs />
        <WeAreBest />
        <TopPlaces />
        <TourType />
        <Gallary />
        <TourPackages />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

export default App;
