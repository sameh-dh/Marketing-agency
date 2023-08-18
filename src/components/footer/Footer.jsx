import React from 'react'
import './footer.css'
import { FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div class="footer-basic">
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