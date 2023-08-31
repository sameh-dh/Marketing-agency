import React ,{useEffect, useRef}from "react";
import "./services.css";
import advertisingImg from "../../images/bullhorn.png";
import socialMediaImg from "../../images/content.png";
import websiteImg from "../../images/internet.png";
import logoDesignImg from "../../images/logo-design.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Services = ({ isToggle,dark }) => {


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
    <div className="sevices" ref={ServicesPannel} id="services">
      <div className={!dark ? "servicesTitle" : "servicesTitle dark"}>
        <h2 className={!dark ? "Home-sections-title" :"Home-sections-title dark"}>{isToggle ? 'Our Services':'nos services'}</h2>
       
      </div>

      <div className="servicesContainer">
        <section className="servicesSection section1">
          <a href="/Logo">
          <img
            src={logoDesignImg}
            alt="Logo Design Image"
            className="servicesImg"
          />
          </a>
          <h4 className="serviceTitleH4">{isToggle? 'Logo Design':'Design de logo'}</h4>
        </section>

        <section className="servicesSection section3">
        <a href="/Social">
          <img
            src={socialMediaImg}
            alt="SocialMedia Image"
            className="servicesImg"
          />
         </a>
          <h4 className="serviceTitleH4">{isToggle? 'Social media':'Réseau sociaux'}</h4>
        </section>
        <section className="servicesSection section4">
          <img src={websiteImg} alt="Website Image" className="servicesImg" />
          <h4 className="serviceTitleH4">{isToggle? 'Website':'Site web'}</h4>
        </section>
        <section className="servicesSection section2">
        <a href="/Ads">
          <img
            src={advertisingImg}
            alt="Advertising Image"
            className="servicesImg"
          />
          </a>
          <h4 className="serviceTitleH4">{isToggle? 'Advertising':'Publicité'}</h4>
        </section>
        
        <section className="servicesSection section4">
         <a href="/Seo" ><img src={websiteImg} alt="Website Image" className="servicesImg" /></a>
          <h4 className="serviceTitleH4">{isToggle? 'Seo':'Seo'}</h4>
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
