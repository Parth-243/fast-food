import React from "react";
import "./SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";

const BusinessSignUpForm = () => {
  const navigate = useNavigate();
  const handleSignUp = async (event) => {
    // console.log("Enter in this function");
    event.preventDefault();
    // console.log(event.preventDefault);

    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const username = form.fullName.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(username, email, password, confirmPassword);

    try {
      const response = await fetch(
        "http://localhost:4000/business/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, confirmPassword }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("User signed up successfully:", data);
        // Redirect or show success message
        navigate("/login");
      } else {
        console.error("Error signing up:", data);
        // Show error message
      }
    } catch (error) {
      console.error("Network error:", error);
      // Show network error message
    }
  };
  return (
    <div className="page-container">
      <div className="content">
        <div className="image-section">
          <img src="sign.jpg" alt="Pizza" className="image" />
          <div className="image-text">
            <h2>Need some Pizza, yo?</h2>
            <p>
              C'mon and order from nearby Pizza delivery and pickup restaurants
            </p>
          </div>
        </div>
        <div className="form-section">
          <form onSubmit={handleSignUp} className="form-container">
            <h2>Business Sign Up</h2>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                name="fullName"
                placeholder="Enter Your Username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your E-mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter Your Password"
                required
              />
            </div>
            <button type="submit" className="sign-up-button">
              Sign Up
            </button>
            <span className="business-signup-link">
              <Link to="/signup">User Sign Up</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignUpForm;
