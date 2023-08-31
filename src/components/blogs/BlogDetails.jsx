// src/BlogDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogsData from "./blogsData";
import { Link } from "react-router-dom";
function BlogDetail({dark}) {
  const [filterblogs, setFilterBlogs] = useState(blogsData);
  const { id } = useParams();
  const blog = blogsData.find((blog) => blog.id === parseInt(id));

  const newblogs = () => {
    // check if more than 2 tags exist it will show the blog
  

    let res = filterblogs.filter((oneBlog, i) => {
      let includeTag = false;
      let TagNum = 0;
     
        for (var j = 0; j < blog.tags.length; j++) {
          if (oneBlog.tags.includes(blog.tags[j])) {
            TagNum++;
          }
        }
     
      if (TagNum >= 2) {
        includeTag = true;
      }
      return parseInt(oneBlog.id) !== parseInt(id) && includeTag;
    });
    setFilterBlogs(res);

    console.log(filterblogs);
  };

  useEffect(() => {
    newblogs();
  }, []);

  window.scrollTo(0, 0);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div className="blogDetail">
        <div className="blogD">
          <img src={blog.image} alt={blog.title} className="blogDImage" />
          <h1 className={!dark ?"blogDTitle" : "blogDTitle dark"}>{blog.title}</h1>
          <div className="blogD-svg-container">
          <svg
            className="testimonials-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 4891 599"
            fill="none"
          >
            <path
              d="M-53 312.011C1367.18 227.958 1962.11 866.864 2725.46 460.606C3488.81 54.3474 3572.67 325.021 4136.29 84.8669C4699.91 -155.287 4891 202.942 4891 202.942"
              stroke="#35383A"
              strokeWidth="3"
              strokeDasharray="30 30"
            />
          </svg>
          </div>
          <p className={!dark ?"blogDDescription":"blogDDescription dark"}>{blog.description}</p>
        </div>
        <div className={!dark ? "blog-details-links" :"blog-details-links dark"}>Similar links</div>

        <div className="blogs">
          {filterblogs.map((blog) => (
            <div key={blog.id} className={!dark ? 'blog' :'blog dark'}>
              <img src={blog.image} alt={blog.title} className="blogImg" />
              <div className={!dark ? 'blogTitle': 'blogTitle dark'}>{blog.title}</div>

              <p className={!dark ?'blogDescription':'blogDescription dark'}>
                {blog.description.slice(0, 200)}...
              </p>
              <Link to={`/blog/${blog.id}`}>
                <div
                  className="blogButton"
                  onClick={() => {
                    const timer = setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  }}
                >
                  More
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="blog-detail-tags">
          {blog.tags.map((tag, i) => (
            <div className="blog-detail-tags-title" key={i}>
              {tag} &nbsp;
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
