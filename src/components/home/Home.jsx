import React from 'react'
import "./home.css"
import HomeSection from './HomeSection'
import About from '../about/About'
import Services from '../services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import Blogs from '../blogs/Blogs'


const Home = () => {
  return (
    <div id='home'>
      <HomeSection /> 
       <About />
      <Services />
      <Testimonials />
      <Contact/>
   
      <Footer/>
    </div>
  )
}

export default Home