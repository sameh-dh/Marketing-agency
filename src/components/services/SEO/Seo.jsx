import React from 'react'
import "./seo.css"
import seo from "../../../images/seo.png"
import Contact from "../../contact/Contact"
const Seo = ({dark}) => {
  return (
  <div className='seo-container'>
    <div className='seo-title'><h2 className={!dark ? "Home-sections-title": "Home-sections-title dark"}>What is SEO</h2></div>
    <div className='seo-section1'>
    Phasellus ornare lorem vel arcu blandit pretium. In et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor. Aenean non tortor ultricies, elementum libero eu, bibendum tortor.Phasellus ornare lorem vel arcu blandit pretium. In et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor. Aenean non tortor ultricies, elementum libero eu, bibendum tortor.Phasellus ornare lorem vel arcu blandit pretium. In et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor. Aenean non tortor ultricies, elementum libero eu, bibendum tortor.Phasellus ornare lorem vel arcu blandit pretium. In et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor.n et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor. Aenean non tortor ultricies, elementum libero eu, bibendum tortor.
    </div>
    {/* section2 */}

    <div className='seo-title sect2 '><h2 className={!dark ? "Home-sections-title": "Home-sections-title dark"}>Why SEO</h2></div>
    <div className='seo-section2'>
        <div>
    Phasellus ornare lorem vel arcu blandit pretium. In et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor. Aenean non tortor ultricies, elementum libero eu, bibendum tortor.Phasellus ornare lorem vel arcu blandit pretium. In et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor. Aenean non tortor ultricies, elementum libero eu, bibendum tortor.Phasellus ornare lorem vel arcu blandit pretium. In et imperdiet leo. Sed a pulvinar metus, vitae finibus ligula. Praesent dapibus tellus at eleifend eleifend. Aliquam blandit ut felis tristique porttitor. Aenean non tortor ultricies, elementum libero eu, bibendum tortor.Phasellus ornare lorem vel arcu blandit pretium.
   
   
    </div>
    <img src={seo}/>
    </div>
    <Contact dark={dark}/>
    </div>
  )
}

export default Seo