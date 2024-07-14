import React from "react";
import BannerBackground from "../../../../Assets/home-banner-background.png";
import BannerImage from "../../../../Assets/Landing_page_pizza.png";
import { FiArrowRight } from "react-icons/fi";
import "../LandingPages.css";

import { Link } from "react-router-dom";

const Home = () => {
  const handleOrderClick = () => {
    alert("Please login/sign up");
  };
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Craving something delicious? Get your favorite food delivered hot
            and fresh, right to your doorstep!
          </p>
          <Link to="/login" className="secondary-button">
            {" "}
            Order Now <FiArrowRight />
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
