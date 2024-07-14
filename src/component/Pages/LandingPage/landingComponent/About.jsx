import React from "react";
import AboutBackground from "../../../../Assets/about-background.png";
import AboutBackgroundImage from "../../../../Assets/Landing_page_girl.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "../LandingPages.css";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Fast food: a delicious part of life, delivered hot and fresh!
        </h1>
        <p className="primary-text">
          Craving something tasty? Our fast food delivery brings options right
          to your door. Enjoy the convenience and flavor with every order!
        </p>
        <p className="primary-text">
          Below is the YouTube link to our website. Learn how we deliver your
          favorite fast food, right to your doorstep with just a few clicks!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
