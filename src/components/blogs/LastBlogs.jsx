import React ,{useState ,useRef, useEffect}from 'react'
import "./blogs.css"
import "./blogsData"
import blogsData from './blogsData';
import { Link } from 'react-router-dom';


const LastBlogs = ({isToggle,dark}) => {

  const BlgosPannel = useRef();
  const [lastBlogsData, setLastBlogsData] =useState(blogsData.reverse().splice(2))
  useEffect(()=> {
    const handleScroll = (e)=> {
      panelSlideIn();
    }
    window.addEventListener('scroll', handleScroll);
    })
    

    const panelSlideIn = function() {
            
             
      const slideInAt = (window.scrollY + window.innerHeight) -  BlgosPannel.current.offsetHeight / 4;
      const panelMidpoint = BlgosPannel.current.offsetTop + BlgosPannel.current.offsetHeight / 4;
      console.log("slideinat :",slideInAt,"pannelMidpoint: ", panelMidpoint)
      if (slideInAt > panelMidpoint) {
        BlgosPannel.current.classList.add('blogs-container-fade-out');
      }
    
    }


  return (
    <div className='lastblogs-container' ref={BlgosPannel}> <div className='blogsC'>
    <div className="blogsTitle">
        <h2 className={!dark ? "Home-sections-title": "Home-sections-title dark"}>{isToggle?'Latest Articles in Digital World' :'Derniers articles dans le monde numérique'}</h2>
      </div>
    <div className='blogs'>
    {blogsData.map((blog) => 
        <div key={blog.id} className={!dark ? 'blog' :'blog dark'}>
            <img src={blog.image} alt={blog.title} className='blogImg'/>
            <div className={!dark ? 'blogTitle': 'blogTitle dark'}>{blog.title}</div>
            
            <p className={!dark ?'blogDescription':'blogDescription dark'}>{blog.description.slice(0, 200)}...</p>
            <a href={`/blog/${blog.id}`} ><div  className='blogButton' onclick={()=> window.location.reload()}>{isToggle? 'More':'Plus'}</div></a>
        </div>
    )}
    </div>
    </div>
    <a href={`/Blogs`} ><div onclick={()=> window.location.reload()

    } className="allblogs"> {isToggle?'See all articles':'Voir tous les articles'}</div></a> 
    </div>
  )
}

export default LastBlogs