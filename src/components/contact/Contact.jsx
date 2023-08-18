import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <h3 className='contactT'>Contact Me</h3>

        <input name="from_name" type="text" class="feedback-input" placeholder="Name" />
        <input type="email" name="user_email" class="feedback-input" placeholder="Email"/>
        <textarea name="message" class="feedback-input" placeholder="Comment"/>
        <button type="submit" value="Send" className='submit' >Send</button>
      </form>
    );
  };


export default Contact