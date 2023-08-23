import React from 'react'
import { Link } from 'react-router-dom';
import blogsData from './blogsData';
import './blogs.css'

const Blogs = () => {
  return (
    <div className='blogsC'>
    <h3 className='blogsT'>Our Blogs</h3>
    <div className='blogs'>
    {blogsData.map((blog) => 
        <div key={blog.id} className='blog'>
            <img src={blog.image} alt={blog.title} className='blogImg'/>
            <h4 className='blogTitle'>{blog.title}</h4>
            <p className='blogDescription'>{blog.description.slice(0, 150)}...</p>
            <Link to={`/blog/${blog.id}`} ><a className='blogButton'>More</a></Link>
        </div>
    )}
    </div>
    </div>
  )
}

export default Blogs