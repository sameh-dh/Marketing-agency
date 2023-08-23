// src/BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogsData from './blogsData';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogsData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>    
    <div className='blogDetail'>
      <div className='blogD'>
      <img src={blog.image} alt={blog.title} className='blogDImage'/>
      <h1 className='blogDTitle'>{blog.title}</h1>
      <p className='blogDDescription'>{blog.description}</p>
      </div>
    </div>
    </>
  );
}

export default BlogDetail;
