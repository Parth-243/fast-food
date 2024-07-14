// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./UserLogin.css";
// import userLogin from "../../../../Assets/Login.jpeg";
// import { Link } from "react-router-dom";

// const UserLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const requestBody = { email, password };
//     console.log("Request Body:", requestBody);

//     try {
//       const response = await fetch("http://localhost:4000/users/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         console.error("Login failed:", data);
//         alert(data.message || "Login failed");
//         return;
//       }

//       const { user, token } = data;
//       const { role } = user;
//       localStorage.setItem("token", token);

//       if (role === "user") {
//         navigate("/userHomePage");
//       } else if (role === "businessUser") {
//         navigate("/restaurantPage");
//       } else if (role === "admin") {
//         navigate("/adminHomePage");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("An error occurred during login. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <div className="page-container">
//         <div className="content">
//           <div className="image-section">
//             <img src={userLogin} alt="Pizza" className="image" />
//             <div className="image-text">
//               <h2>Need some Pizza, yo?</h2>
//               <p>C'mon and order from nearby Restaurants</p>
//             </div>
//           </div>
//           <div className="form-section">
//             <form className="form-container" onSubmit={handleSubmit}>
//               <h2>User Login</h2>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" className="sign-up-button">
//                 Login
//               </button>
//               <div className="links">
//                 <span className="business-signup-link">
//                   <Link to="/adminLogin">Admin Login</Link>
//                 </span>
//                 <span className="business-signup-link">/</span>
//                 <span className="business-signup-link">
//                   <Link to="/businessLogin">Business Login</Link>
//                 </span>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./UserLogin.css";
import userLogin from "../../../../Assets/Login.jpeg";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = { email, password };

    try {
      const response = await fetch("http://localhost:4000/users/auth/login", {
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
            <h2>User Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
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
              <Link to="/businessLogin">Business Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
