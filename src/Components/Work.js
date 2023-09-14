import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import pic from '../Assets/mid-back.png'
import '../styles/work.css'

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top left-div" >
        
        <img src={pic} alt="name"/>
        
      </div>
     
      <div className="paragraph right-div">
        <h2>
        At Altrusia, we provide innovative start-ups with the potential to add positive change to the industry by presenting them with a platform to enhance their networking by connecting them with venture capitalists, mentors, and potential clientele from related industries. To ensure that your organization gets the maximum visibility at our event, we offer customized packages showcasing keynote slots, marketing campaigns, and more. Join us to achieve your objectives quickly and efficiently.
        </h2>
        <button className="work-more">view more</button>
      </div>
      
    </div>
  );
};

export default Work;
