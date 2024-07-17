import React from "react";
import "./Abouts.css";

function Abouts() {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">
            FoodExpress | Your Ultimate Destination for Quick and Fresh Meal
            Deliveries
          </h1>
          <p className="about-description">
            FoodExpress delivers your favorite fast food quickly and fresh.
            Restaurants can partner with us to expand their reach and bring
            delicious meals to customers' doorsteps. Enjoy convenience and
            quality with every order!
          </p>
          {/* <button className="impact-button">View Our Impact</button> */}
        </div>
        <div className="about-image">
          <img src="Eating-Fast-Food-.png" alt="Big Image" />
        </div>
      </section>

      <section className="location-section">
        <h2 className="section-title">Our Location</h2>
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590444!3d-37.81627974202126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e92e005bb3a3!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1619631442771!5m2!1sen!2sau"
            loading="lazy"
            allowFullScreen=""
            title="Company Location"
          ></iframe>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Team Overview</h2>
        <div className="image-grid">
          <div className="image-card">
            <img src="dummy-img.jpg" alt="Team Member 1" />
            <p className="team-member-name">Parth</p>
          </div>
          <div className="image-card">
            <img src="dummy-img.jpg" alt="Team Member 2" />
            <p className="team-member-name">Chinmay</p>
          </div>
          <div className="image-card">
            <img src="dummy-img.jpg" alt="Team Member 3" />
            <p className="team-member-name">Aditya</p>
          </div>
          <div className="image-card">
            <img src="dummy-img.jpg" alt="Team Member 4" />
            <p className="team-member-name">Daksh</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Abouts;
