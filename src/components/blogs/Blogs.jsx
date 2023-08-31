import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import blogsData from './blogsData';
import './blogs.css'

const Blogs = ({dark}) => {

  useEffect (()=>{
    window.scrollTo(0, 0);
  
  },[])
  

  return (
    <div className='blogsC'>
    <div className="blogsTitle">
        <h2 className={!dark ? "Home-sections-title" :"Home-sections-title dark" }>Our Blogs</h2>
      </div>
    <div className='blogs'>
    {blogsData.map((blog) => 
        <div key={blog.id} className={!dark ? 'blog' :'blog dark'}>
            <img src={blog.image} alt={blog.title} className='blogImg'/>
            <div className={!dark ? 'blogTitle': 'blogTitle dark'}>{blog.title}</div>
            
            <p className={!dark ?'blogDescription':'blogDescription dark'}>{blog.description.slice(0, 200)}...</p>
            <a  href={ `/blog/${blog.id}` } className={!dark ? 'blogButton':'blogButton dark'}>More</a>
        </div>
    )}
    </div>
    </div>
  )
}

export default Blogs