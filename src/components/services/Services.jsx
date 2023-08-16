import React from 'react';
import './services.css';
import advertisingImg from '../../images/bullhorn.png'
import socialMediaImg from '../../images/content.png'
import websiteImg from '../../images/internet.png'
import logoDesignImg from '../../images/logo-design.png'


const Services = () => {
  return (
  
    <div className='sevices'>

    <div className='servicesTitle'>
        <h2>Our</h2>
        <button className='btnS'>Services</button>
    </div>

    <div className='servicesContainer'>

        <section className='servicesSection section1'>
            <div className='triangle1'/>
            <img src={logoDesignImg} alt='Logo Design Image' className='servicesImg' />
            <h4 className='serviceTitle'>Logo Design</h4>
        </section>

        <section className='servicesSection section2'>
            <div className='triangle2'/>
            <img src={advertisingImg} alt='Advertising Image' className='servicesImg' />
            <h4 className='servicesTitle'>Advertising</h4>
        </section>

        <section className='servicesSection section3'>
            <div className='triangle3'/>
            <img src={socialMediaImg} alt='SocialMedia Image' className='servicesImg' />
            <h4 className='servicesTitle'>Social media</h4>
        </section>

        <section className='servicesSection section4'>
            <div className='triangle4'/>
            <img src={websiteImg} alt='Website Image' className='servicesImg' />
            <h4 className='servicesTitle'>Website</h4>
        </section>
        
    </div>

    </div>

  )
}

export default Services