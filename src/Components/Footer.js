import React from "react";
import Logo from "../Assets/ltrusia.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {GrLocation} from 'react-icons/gr'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/AltrusiaGlobal"><BsTwitter /></a>
          <a href="https://www.linkedin.com/company/altrusia/"><SiLinkedin /></a>
          <a href="https://www.youtube.com/channel/UCcB6XqPlJk4yoWQ9qxknlOg"><BsYoutube /></a>
          <a href="https://www.facebook.com/altrusiaglobal"><FaFacebookF /></a>
        </div>
        <div className="copyrights">
          <p>© 2023 altrusiaglobal.com All Rights Reserved</p>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <b>Link</b>
          
          <span>Home</span>
          <span>Our Events</span>
          <span>About us</span>
          
        </div>
        <div className="footer-section-columns">
          <b>Contact us</b>
          <span><GrLocation color="wheat"/> Mumbai</span>
          <span>info@altrusiaglobal.com</span>
          <span>+44 2037730976</span>
        </div>
        <div className="footer-section-columns">
          <b>Useful links</b>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
