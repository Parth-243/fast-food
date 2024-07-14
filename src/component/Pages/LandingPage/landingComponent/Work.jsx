import React from "react";
import PickMeals from "../../../../Assets/pick-meals-image.png";
import ChooseMeals from "../../../../Assets/choose-image.png";
import DeliveryMeals from "../../../../Assets/delivery-image.png";
import "../LandingPages.css";
const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Fresh Meals",
      text: "Enjoy fresh meals delivered fast to your doorstep, bringing you delicious convenience every time!",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose how often you want fresh meals delivered. Enjoy delicious convenience on your terms! ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Experience fast deliveries of your favorite meals, hot and fresh, straight to your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          place your order, and enjoy hot, fresh food delivered to your
          doorstep. Quick, easy, and delicious!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
