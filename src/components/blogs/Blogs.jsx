import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import blogsData from './blogsData';
import './blogs.css'
import './blogsCardLoader.css'
const Blogs = ({dark}) => {
   const [loader, setLoader] =useState(true);
  useEffect (()=>{
    window.scrollTo(0, 0);
    setTimeout(()=> {
           setLoader(false);
    },3000)
  },[])
  

  return (
    <div className='blogsC'>
    <div className="blogsTitle">
        <h2 className={!dark ? "Home-sections-title" :"Home-sections-title dark" }>Our Blogs</h2>
      </div>
      {loader ?
    <div className='cards_container'>
    {blogsData.map((blog,i) => 
        // <div key={blog.id} className={!dark ? 'blog' :'blog dark'}>
        //     <img src={blog.image} alt={blog.title} className='blogImg'/>
        //     <div className={!dark ? 'blogTitle': 'blogTitle dark'}>{blog.title}</div>
            
        //     <p className={!dark ?'blogDescription':'blogDescription dark'}>{blog.description.slice(0, 200)}...</p>
        //     <a  href={ `/blog/${blog.id}` } className={!dark ? 'blogButton':'blogButton dark'}>More</a>
        // </div>
        <div className="card_container" key={i}>
            <div className="card_image"></div>
            <div className="card_title"></div>
            <div className="card_description"></div>
            <button className="card_button"></button>
          </div>
    )}
    </div>
     :    <div className='blogs'>
       {blogsData.map((blog,i) => 
        <div key={blog.id} className={!dark ? 'blog' :'blog dark'}>
            <img src={blog.image} alt={blog.title} className='blogImg'/>
            <div className={!dark ? 'blogTitle': 'blogTitle dark'}>{blog.title}</div>
            
            <p className={!dark ?'blogDescription':'blogDescription dark'}>{blog.description.slice(0, 200)}...</p>
            <a  href={ `/blog/${blog.id}` } className={!dark ? 'blogButton':'blogButton dark'}>More</a>
        </div>
       
    )}</div>} 
    </div>
  )
}

export default Blogs