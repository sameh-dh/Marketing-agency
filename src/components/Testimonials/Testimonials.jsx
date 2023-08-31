
import React , {useState,useEffect,useRef} from "react";
import "./testimonials.css";
import {TestimonialsData} from "./Data";


const Testimonials = ({isToggle,dark}) => {

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
   <div className="testimonials-title"><h2 className={!dark ? "Home-sections-title": "Home-sections-title dark"}>{isToggle? 'Testimonials':'Témoignages'}</h2> </div>
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




 
   

      

