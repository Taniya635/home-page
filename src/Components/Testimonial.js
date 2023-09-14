import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import down from '../Assets/down-img.png'
import '../styles/testimonial.css'

const Testimonial = () => {
  return (
    <div className="">
      <div className="testimonial-section-bottom">
        <h3>Why us</h3>
        <p style={{color:"wheat"}}>We bring to you an exceptional lineup of speakers and captivating startups from around the globe with the potential to revolutionize the world, along with the latest technological innovations and applicable solutions to address the ongoing challenges in business and society.</p>

        <div className="main-div">
          <div className="sub-div" style={{color:"wheat"}}><p>Gain success to our well researched and highly curated agenda</p></div>
          <div className="sub-div" style={{color:"wheat"}}><p>Gain success to our well researched and highly curated agenda</p></div>
          <div className="sub-div" style={{color:"wheat"}}><p>Gain success to our well researched and highly curated agenda</p></div>
          <div className="sub-div" style={{color:"wheat"}}><p>Gain success to our well researched and highly curated agenda</p></div>
        </div>
      </div>



      <div className="testimonal">
        {/* <p className="primary-subheading" >Testimonial</p> */}
        <h1 className="primary-heading">Our testimonials, what They Are Saying</h1>
        
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p style={{color:"wheat"}}>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 style={{color:"wheat"}}>John Doe</h2>
      </div>
      <div className="fade-image">
        <img src={down}/>
      </div>
    </div>
  );
};

export default Testimonial;
