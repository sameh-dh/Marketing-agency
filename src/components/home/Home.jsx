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

const Home = ({ isToggle,dark }) => {
  return (
    <div id='home'>
      <HomeSection isToggle={isToggle} dark={dark}/> 
      <About isToggle={isToggle} dark={dark}/>
      <Services isToggle={isToggle} dark={dark}/>
      <Testimonials isToggle={isToggle} dark={dark}/>
      <LastBlogs isToggle={isToggle} dark={dark}/>
      <Contact isToggle={isToggle} dark={dark}/>
      <Footer isToggle={isToggle} dark={dark}/>
    </div>
  )
}

export default Home