import React from 'react'
import "./home.css"
import HomeSection from './HomeSection'
import About from '../about/About'
import Services from '../services/Services'
import Testimonials from '../Testimonials/Testimonials'
const Home = () => {
  return (
    <div id='home'>
      <HomeSection />
      <About />
      <Services />
      <Testimonials />
    </div>
  )
}

export default Home