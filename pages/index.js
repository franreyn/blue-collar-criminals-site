import React from 'react';
import Navigation from './components/Navbar.js';
import Banner from './components/Banner.js';
import Intro from './components/Intro.js';
import Shows from './components/Shows.js';
import News from './components/News.js';
import Instagram from './components/Instagram.js';
import Social from './components/Social.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Music from './components/Music.js';

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner />  
      <Music />
      <Shows /> 
      <News />
      <Social />
      <About />
      <Footer />
    </>
  )
}
