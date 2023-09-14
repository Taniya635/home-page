import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/mid-back.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          A Global Events Company
          </h1>
          <p className="primary-text">
          Organizing innovative technology based industory-tailored conferences covering a wide range
          </p>
          <button className="secondary-button">
            View more <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
