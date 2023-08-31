import React ,{useEffect, useRef}from "react";
import "./services.css";
import advertisingImg from "../../images/bullhorn.png";
import socialMediaImg from "../../images/content.png";
import websiteImg from "../../images/internet.png";
import logoDesignImg from "../../images/logo-design.png";

const Services = ({ isToggle }) => {


  const ServicesPannel = useRef();
 
  useEffect(()=> {
    const handleScroll = (e)=> {
      panelSlideIn();
    }
    window.addEventListener('scroll', handleScroll);
    })
    
    
    const panelSlideIn = function() {
          
           
      const slideInAt = (window.scrollY + window.innerHeight) -  ServicesPannel.current.offsetHeight / 4;
      const panelMidpoint = ServicesPannel.current.offsetTop + ServicesPannel.current.offsetHeight / 4;
      console.log("slideinat :",slideInAt,"pannelMidpoint: ", panelMidpoint)
      if (slideInAt > panelMidpoint) {
        ServicesPannel.current.classList.add('services-fade-out');
      }
    
    }
    


  return (
    <div className="sevices" ref={ServicesPannel}>
      <div className="servicesTitle">
        <h2 className="Home-sections-title">{isToggle ? 'Our Services':'nos services'}</h2>
       
      </div>

      <div className="servicesContainer">
        <section className="servicesSection section1">
          <img
            src={logoDesignImg}
            alt="Logo Design Image"
            className="servicesImg"
          />
          <h4 className="serviceTitleH4">{isToggle? 'Logo Design':'Design de logo'}</h4>
        </section>

        <section className="servicesSection section3">
          <img
            src={socialMediaImg}
            alt="SocialMedia Image"
            className="servicesImg"
          />
          <h4 className="serviceTitleH4">{isToggle? 'Social media':'Réseau sociaux'}</h4>
        </section>
        <section className="servicesSection section4">
          <img src={websiteImg} alt="Website Image" className="servicesImg" />
          <h4 className="serviceTitleH4">{isToggle? 'Website':'Site web'}</h4>
        </section>
        <section className="servicesSection section2">
          <img
            src={advertisingImg}
            alt="Advertising Image"
            className="servicesImg"
          />
          <h4 className="serviceTitleH4">{isToggle? 'Advertising':'Publicité'}</h4>
        </section>
        <section className="servicesSection section4">
          <img src={websiteImg} alt="Website Image" className="servicesImg" />
          <h4 className="serviceTitleH4">{isToggle? 'Website':'Site web'}</h4>
        </section>
        <section className="servicesSection section3">
          <img
            src={socialMediaImg}
            alt="SocialMedia Image"
            className="servicesImg"
          />
          <h4 className="serviceTitleH4">{isToggle? 'Social media':'Réseau sociaux'}</h4>
        </section>

        <section className="servicesSection section4">
          <img src={websiteImg} alt="Website Image" className="servicesImg" />
          <h4 className="serviceTitleH4">{isToggle? 'Website':'Site web'}</h4>
        </section>
        <section className="servicesSection section3">
          <img
            src={socialMediaImg}
            alt="SocialMedia Image"
            className="servicesImg"
          />
          <h4 className="serviceTitleH4">{isToggle? 'Social media':'Réseau sociaux'}</h4>
        </section>
      </div>
    </div>
  );
};

export default Services;
