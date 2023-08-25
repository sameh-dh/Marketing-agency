import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import blogsData from './blogsData';
import './blogs.css'

const Blogs = () => {

  useEffect (()=>{
    window.scrollTo(0, 0);
  
  },[])
  

  return (
    <div className='blogsC'>
    <div className="blogsTitle">
        <h2 className="Home-sections-title">Our Blogs</h2>
      </div>
    <div className='blogs'>
    {blogsData.map((blog) => 
        <div key={blog.id} className='blog'>
            <img src={blog.image} alt={blog.title} className='blogImg'/>
            <div className='blogTitle'>{blog.title}</div>
            
            <p className='blogDescription'>{blog.description.slice(0, 200)}...</p>
            <Link to={`/blog/${blog.id}`} ><a  className='blogButton'>More</a></Link>
        </div>
    )}
    </div>
    </div>
  )
}

export default Blogs