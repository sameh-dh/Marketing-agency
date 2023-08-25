import React, {useRef, useEffect}from 'react';
import './about.css';
import imgSocialMedia from '../../images/socialmedia.png';
import imgTeam from '../../images/Team.png';

const About = () => {
  const AboutPannel = useRef();
 
  useEffect(()=> {
    const handleScroll = (e)=> {
      panelSlideIn();
    }
    window.addEventListener('scroll', handleScroll);
    })
    
    
    const panelSlideIn = function() {
          
           
      const slideInAt = (window.scrollY + window.innerHeight) -  AboutPannel.current.offsetHeight / 4;
      const panelMidpoint = AboutPannel.current.offsetTop + AboutPannel.current.offsetHeight / 4;
      console.log("slideinat :",slideInAt,"pannelMidpoint: ", panelMidpoint)
      if (slideInAt > panelMidpoint) {
        AboutPannel.current.classList.add('grid-container-fade-out');
      }
    
    }
    




  return (
<div>
<div className='About-title'><h2 className="Home-sections-title">Who we are ?</h2></div>
    <div className="grid-container" ref={AboutPannel}>

    <div className="section s1">
      <img src={imgSocialMedia} alt='SocialMediaImg' className='img' />
    </div>

    <div className="section s2">
      <h2 className='about-title'>Our main priority is to Grow your<br/> business. We are:</h2>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took <strong>a galley of type and scrambled</strong> it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially,
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took . </p>
     
    </div>

    <div className="section s3">

    <h2 className='about-title'>Our Team is Ready to serve<br/> you. We are:</h2>

      <p><strong>Lorem Ipsum</strong> has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived <strong>not only five centuries,</strong> but also the leap into electronic typesetting, remaining essentially,
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an <strong>unknown printer took</strong> a galley of type and scrambled it to make . </p>
       
    </div>

    <div className="section s4">
      <img src={imgTeam} alt='TeamImg' className='img'/>
    </div>

    </div>
    </div>
  )
}

export default About