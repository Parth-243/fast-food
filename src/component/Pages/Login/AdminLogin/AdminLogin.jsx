import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import userLogin from "../../../../Assets/login1.jpg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = { email, password };
    console.log("Request Body:", requestBody);

    try {
      const response = await fetch("http://localhost:4000/admin/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Login failed:", data);
        alert(data.message || "Login failed");
        return;
      }

      const { user, token } = data;
      const { role } = user;
      localStorage.setItem("token", token);

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
    <div>
      <div className="page-container">
        <div className="content">
          <div className="image-section">
            <img src={userLogin} alt="Pizza" className="image" />
            <div className="image-text"></div>
          </div>
          <div className="form-section">
          <form className="form-container" onSubmit={handleSubmit}>
              <h2>Admin Login</h2>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Busniess Username"
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
              <button type="submit" className="sign-up-button">
                Login
              </button>

              <span className="business-signup-link">
                <Link to="/Login">User Login</Link>
              </span>
              <span className="business-signup-link">
                <Link to="/businessLogin">Business Login</Link>
              </span>
              <span className="business-signup-link"></span>
            </form>
          </div>
        </div>{" "}
        {/* Add Footer component */}
      </div>
    </div>
  );
};

export default AdminLogin;
