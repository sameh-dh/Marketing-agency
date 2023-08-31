import React ,{useRef, useEffect}from 'react'
import './footer.css'
import { FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = ({isToggle,dark}) => {

  const FooterPannel = useRef();
 
  useEffect(()=> {
    const handleScroll = (e)=> {
      panelSlideIn();
    }
    window.addEventListener('scroll', handleScroll);
    })
    
    
    const panelSlideIn = function() {
          
           
      const slideInAt = (window.scrollY + window.innerHeight) -  FooterPannel.current.offsetHeight / 4;
      const panelMidpoint = FooterPannel.current.offsetTop + FooterPannel.current.offsetHeight / 4;
      console.log("slideinat :",slideInAt,"pannelMidpoint: ", panelMidpoint)
      if (slideInAt > panelMidpoint) {
        FooterPannel.current.classList.add('footer-basic-fade-out');
      }
    
    }
  return (
    <>
    <div className={!dark ? "footer-basic wave wave--top " : "footer-basic wave wave--top dark "} ref={FooterPannel}>
        <footer>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div className='line'></div>
            <div className='footer'>                
            <div class="social"><a href="#"><FaFacebook className="icon" /></a><a href="#"><FaInstagram className="icon" /></a><a href="#"><FaEnvelope className="icon" /></a></div>
            <p class="copyright">Marketing Agency © 2023</p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer