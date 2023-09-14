import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/mid-back.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import '../styles/about.css'

const About = () => {
  return (
    <div className="about-section-container">
      {/* <p className="primary-subheading">About</p> */}
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section">
      <div className="about-section-text-container">
        
        <h3 className="primary-heading">
          23 & 24 November 2023
        </h3>
        <p className="primary-text">
          Conversational AI and Customer Experience summit
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        
      </div>
      
      </div>

      <div className="about-section-2">
      <div className="about-section-text-container">
        
        <h3 className="primary-heading">
          23 & 24 November 2023
        </h3>
        <p className="primary-text">
          Conversational AI and Customer Experience summit
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        
      </div>
      
      </div>

      <div className="about-section-3">
      <div className="about-section-text-container">
        
        <h3 className="primary-heading">
          23 & 24 November 2023
        </h3>
        <p className="primary-text">
          Conversational AI and Customer Experience summit
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        
      </div>

      
      </div>
      {/* <div className="about-buttons-container">
      <button className="secondary-button">Learn More</button>
      <button className="watch-video-button">
        <BsFillPlayCircleFill /> Watch Video
      </button>
    </div> */}
    
         
    

    </div>
  );
};

export default About;
