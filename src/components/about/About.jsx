import React from 'react';
import './about.css';
import imgSocialMedia from '../../images/socialmedia.png';
import imgTeam from '../../images/Team.png';

const About = () => {
  return (
    <>
    <div className="grid-container">

    <div className="section s1">
      <img src={imgSocialMedia} alt='SocialMediaImg' className='img' />
    </div>

    <div className="section s2">
      <h2>Our main priority is to Grow your<br/> business. We are:</h2>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially,
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took . </p>
        <button className='btn'>Start Here</button>
    </div>

    <div className="section s3">
    <h2>Our Team is Ready to serve<br/> you. We are:</h2>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially,
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make . </p>
        <button className='btn'>Start Here</button>
    </div>

    <div className="section s4">
      <img src={imgTeam} alt='TeamImg' className='img'/>
    </div>

    </div>
    </>
  )
}

export default About