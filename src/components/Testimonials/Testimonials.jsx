
import React , {useState,useEffect,useRef} from "react";
import "./testimonials.css";
import {TestimonialsData} from "./Data";
const Testimonials = () => {

const  [i, setI] = useState(0)
const  [j, setJ] = useState(TestimonialsData.length)

const testimonialsPannel = useRef();
 
useEffect(()=> {
const handleScroll = (e)=> {
  panelSlideIn();
}
window.addEventListener('scroll', handleScroll);
})


const panelSlideIn = function() {
      
       
  const slideInAt = (window.scrollY + window.innerHeight) -  testimonialsPannel.current.offsetHeight / 4;
  const panelMidpoint = testimonialsPannel.current.offsetTop + testimonialsPannel.current.offsetHeight / 4;
  console.log("slideinat :",slideInAt,"pannelMidpoint: ", panelMidpoint)
  if (slideInAt > panelMidpoint) {
    testimonialsPannel.current.classList.add('testimonials-container-fade-out');
  }

}

 setTimeout(() => {
  if (i=== j-1){
    setI(0);
  }else {
    setI(i+1);
  }
  }, 4000);
  // return () => clearTimeout(timer);


function next() {
  let res =(j + i + 1) % j
  setI(res);
  console.log(i );

}

function prev() {
  let res = (j + i - 1) % j
  setI (res ) ;

}

  return (
    <div className="testimonials-container" ref={testimonialsPannel}>
   <div className="testimonials-title"><h2 className="Home-sections-title">Testimonials</h2> </div>
        <div id="box">
          <div class="wrapper">
            <div class="testimonial-container" id="testimonial-container">
            <img src={TestimonialsData[i].image}></img>
            <h3>{TestimonialsData[i].name}</h3>
            <p>{TestimonialsData[i].testimonial}</p>
  
        {/* <h6>{TestimonialsData[i].job}</h6> */}
              <div id="testimonial1" class="active">
                
              </div>
            </div>
            <button id="prev" onClick={()=> prev()}>
              &lt;
            </button>
            <button id="next" onClick={()=> next()}>
              &gt;
            </button>
          </div>
        </div>
      </div>
   
  );
};

export default Testimonials;



    {/* <div class="img-con">
            <img src="https://i.postimg.cc/gJDkZrNn/profile-image-1.png" />
            <img src="https://i.postimg.cc/8kZzkJ7Y/profile-image-2.png" />
            <img src="https://i.postimg.cc/90gmLK32/profile-image-3.png" />
            <img src="https://i.postimg.cc/6qp6Lwmz/profile-image-4.png" />
          </div> */}
            {/* <div id="loader"></div> */}




               {/* <svg

import React from "react";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <svg

        className="testimonials-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 4891 599"
        fill="none"
      >
        <path
          d="M-53 312.011C1367.18 227.958 1962.11 866.864 2725.46 460.606C3488.81 54.3474 3572.67 325.021 4136.29 84.8669C4699.91 -155.287 4891 202.942 4891 202.942"
          stroke="#35383A"
          stroke-width="3"
          stroke-dasharray="30 30"
        />

      </svg> */}

      

