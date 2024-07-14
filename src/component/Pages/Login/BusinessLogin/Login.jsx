import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import userLogin from "../../../../Assets/Business-User.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = { email, password };

    try {
      const response = await fetch(
        "http://localhost:4000/business/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          credentials: "include", // Ensure cookies are included in the request
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Login failed:", data);
        alert(data.message || "Login failed");
        return;
      }

      const { role } = data;

      if (role === "user") {
        navigate("/userHomePage");
      } else if (role === "businessUser") {
        navigate("/restaurantPage");
      } else if (role === "admin") {
        navigate("/adminHomePage");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image-section">
          <img src={userLogin} alt="Pizza" className="login-image" />
          <div className="login-image-text">
            <h2>Need some Pizza, yo?</h2>
            <p>C'mon and order from nearby Restaurants</p>
          </div>
        </div>
        <div className="login-form-section">
          <form className="login-form-container" onSubmit={handleSubmit}>
            <h2>Business Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="login-links">
              <Link to="/adminLogin">Admin Login</Link>
              <Link to="/login">User Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
