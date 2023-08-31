import './contact.css'
import React, { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = ({isToggle}) => {
    const form = useRef();
    const ContactPannel = useRef();
 
    useEffect(()=> {
      const handleScroll = (e)=> {
        panelSlideIn();
      }
      window.addEventListener('scroll', handleScroll);
      })
      
      
      const panelSlideIn = function() {
            
             
        const slideInAt = (window.scrollY + window.innerHeight) -  ContactPannel.current.offsetHeight / 4;
        const panelMidpoint = ContactPannel.current.offsetTop + ContactPannel.current.offsetHeight / 4;
        console.log("slideinat :",slideInAt,"pannelMidpoint: ", panelMidpoint)
        if (slideInAt > panelMidpoint) {
          ContactPannel.current.classList.add('contact-container-fade-out');
        }
      
      }
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
          alert("Thanks for your time we will reach you back via email!")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
   <div className='contact-container' ref={ContactPannel}>
   <div className='contact-title'><h2 className="Home-sections-title">{isToggle?'Contact us':'Contactez-nous'}</h2></div>
   <form ref={form} onSubmit={sendEmail}>
        <input name="from_name" type="text" class="feedback-input" placeholder={isToggle?'Name':'Nom'} />
        <input type="email" name="user_email" class="feedback-input" placeholder="Email"/>
        <textarea name="message" class="feedback-input" placeholder={isToggle?'Comment':'Commentaire'}/>
        <button type="submit" value="Send" className='submit' >{isToggle?'Send':'Envoyer'}</button>
      </form>
      </div>
    );
  };


export default Contact