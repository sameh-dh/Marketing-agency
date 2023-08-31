import React from 'react'
import "./home.css"
import HomeSection from './HomeSection'
import About from '../about/About'
import Services from '../services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import Blogs from '../blogs/Blogs'
import LastBlogs from '../blogs/LastBlogs'

const Home = ({ isToggle }) => {
  return (
    <div id='home'>
      <HomeSection isToggle={isToggle}/> 
       <About isToggle={isToggle}/>
      <Services isToggle={isToggle}/>
      <Testimonials isToggle={isToggle}/>
      <LastBlogs isToggle={isToggle}/>
      <Contact isToggle={isToggle}/>
      <Footer isToggle={isToggle}/>
    </div>
  )
}

export default Home