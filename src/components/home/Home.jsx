import React from 'react'
import "./home.css"
import HomeSection from './HomeSection'

import About from '../about/About'
import Services from '../services/Services'
const Home = () => {
  return (
    <div id='home'>
      <HomeSection />
      <About />
      <Services />
    </div>
  )
}

export default Home