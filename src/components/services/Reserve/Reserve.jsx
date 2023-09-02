import React, { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./reserve.css";
import { useParams } from "react-router-dom";

const Reserve = ({dark, isToggle}) => {
    const form = useRef();
    const { choice } = useParams();
 
 
      
      
     
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
   <div className={!dark ? 'contact-container reserve':'contact-container reserve dark'} >
   <div className='contact-title'><h2 className={!dark ? "Home-sections-title":"Home-sections-title dark"}>{isToggle?'Let\'s Have a conversation':'Ayons une conversation'}</h2></div>
   <form ref={form} onSubmit={sendEmail}>
        <input name="from_name" type="text" className="feedback-input" placeholder={isToggle?'Name':'Nom'} />
        <input type="email" name="user_email" className="feedback-input" placeholder="Email"/>

        <input type="text" name="user_service" className="feedback-input" value={choice}/>
        <input type="text" name="user_number" className="feedback-input" placeholder={isToggle?'Phone Number':'Numéro De Téléphone'}/>
        <textarea name="message" className="feedback-input" placeholder={isToggle?'Comment':'Commentaire'}/>
        <button type="submit" value="Send" className='submit' >{isToggle?'Send':'Envoyer'}</button>

        <input type="text" name="user_service" className="feedback-input" value={choice}/>
        <input type="text" name="user_number" className="feedback-input" placeholder="Phone number"/>
        <textarea name="message" className="feedback-input" placeholder="Comment"/>
        <button type="submit" value="Send" className='submit' >Send</button>

      </form>
      </div>
    );
}

export default Reserve