import React, {useRef, useEffect}from 'react';
import './about.css';
import imgSocialMedia from '../../images/socialmedia.png';
import imgTeam from '../../images/Team.png';

const About = ({ isToggle ,dark}) => {
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
<div id='About'>
<div className={!dark ?'About-title' :'About-title dark'}><h2 className="Home-sections-title">{isToggle? 'Who we are ?':'Qui sommes-nous?'}</h2></div>
    <div className="grid-container" ref={AboutPannel}>

    <div className="section s1">
      <img src={imgSocialMedia} alt='SocialMediaImg' className='img' />
    </div>

    <div className={!dark ?"section s2" : "section s2 dark"}>
    <h2 className='about-title'>{isToggle?
    `Our main priority is to Grow your${<br/>} business. We are:`
    :`Notre principale priorité est de développer votre${<br/>} Nous sommes:`
    }</h2>
      <p>{isToggle?
      `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took ${<strong>a galley of type and scrambled</strong>} it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially,
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took . `
        :`Lorem Ipsum est le texte fictif standard de lindustrie depuis les années 1500, 
        quand une imprimante inconnue a pris ${<strong>une galère de type et l a brouillée</strong>} pour faire un livre de spécimens de type. 
        Il a survécu non seulement cinq siècles, mais aussi le saut dans la composition électronique, restant essentiellement,
        Lorem Ipsum est le texte fictif standard de l industrie depuis les années 1500, 
        quand une imprimante inconnue a pris . `
        }</p>
     
    </div>

    <div className={!dark ? "section s3" : "section s3 dark"}>

    <h2 className='about-title'>{isToggle? 'Our Team is Ready to serve':'Notre équipe est prête à servir'}<br/> {isToggle? 'you. We are:':'vous. Nous sommes :'}</h2>

      <p>{isToggle? `${<strong>Lorem Ipsum</strong>} has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived ${<strong>not only five centuries,</strong>} but also the leap into electronic typesetting, remaining essentially,
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an ${<strong>unknown printer took</strong>} a galley of type and scrambled it to make .`
        :`${<strong>Lorem Ipsum</strong>} est le texte fictif standard de l industrie depuis les années 1500, 
        quand un imprimeur inconnu a pris une galère de type et l a brouillée pour faire un livre de spécimen de type. 
        Il a survécu ${<strong>non seulement cinq siècles,</strong>} mais aussi le saut dans la composition électronique, restant essentiellement,
        Lorem Ipsum est le texte fictif standard de l industrie depuis les années 1500, 
        quand une imprimante ${<strong>inconnue a pris</strong>} une galère de type et l a brouillée pour faire .`} </p>
       
    </div>

    <div className="section s4">
      <img src={imgTeam} alt='TeamImg' className='img'/>
    </div>

    </div>
    </div>
  )
}

export default About