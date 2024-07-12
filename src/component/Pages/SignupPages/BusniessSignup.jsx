// import React from "react";
// import "./BusniessSignup.css";
// import { Link, useNavigate } from "react-router-dom";

// function BusniessSignup() {
//   const navigate = useNavigate();
//   const handleSignUp = async (event) => {
//     // console.log("Enter in this function");
//     event.preventDefault();
//     // console.log(event.preventDefault);

//     const form = event.target;
//     // console.log(form);
//     const email = form.email.value;
//     const username = form.name.value;
//     const password = form.password.value;
//     console.log(username, email, password);

//     try {
//       const response = await fetch("http://localhost:4000/api/users/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ fullName: username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("User signed up successfully:", data);
//         // Redirect or show success message
//         navigate("/businessLogin");
//       } else {
//         console.error("Error signing up:", data);
//         // Show error message
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       // Show network error message
//     }
//   };

//   return (
//     <div>
//       <div className="page-container">
//         <div className="content">
//           <div className="image-section">
//             <img src="sign.jpg" alt="Pizza" className="image" />
//             <div className="image-text">
//               <h2>Need some Pizza, yo?</h2>
//               <p>
//                 C'mon and order from nearby Pizza delivery and pickup
//                 restaurants
//               </p>
//             </div>
//           </div>
//           <div className="form-section">
//             <form onSubmit={handleSignUp} className="form-container">
//               <h2>Busniess Sign Up</h2>
//               <div className="form-group">
//                 <label htmlFor="name">Username</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter Your Busniess Username"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">E-mail</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter Your Busniess E-mail"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter Your Busniess Password"
//                   required
//                 />
//               </div>
//               <button
//                 // onClick={handleSignUp}
//                 type="submit"
//                 className="sign-up-button"
//               >
//                 Sign Up
//               </button>
//               <span className="business-signup-link">
//                 <Link to="/signup">User Sign Up</Link>
//               </span>
//             </form>
//           </div>
//         </div>{" "}
//         {/* Add Footer component */}
//       </div>
//     </div>
//   );
// }
// export default BusniessSignup;

// import React from "react";
// import "./BusniessSignup.css";
// import { Link, useNavigate } from "react-router-dom";

// function BusniessSignup() {
//   const navigate = useNavigate();
//   const handleSignUp = async (event) => {
//     // console.log("Enter in this function");
//     event.preventDefault();
//     // console.log(event.preventDefault);

//     const form = event.target;
//     // console.log(form);
//     const email = form.email.value;
//     const username = form.name.value;
//     const password = form.password.value;
//     console.log(username, email, password);

//     try {
//       const response = await fetch("http://localhost:4000/api/users/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ fullName: username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("User signed up successfully:", data);
//         // Redirect or show success message
//         navigate("/businessLogin");
//       } else {
//         console.error("Error signing up:", data);
//         // Show error message
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       // Show network error message
//     }
//   };

//   return (
//     <div>
//       <div className="page-container">
//         <div className="content">
//           <div className="image-section">
//             <img src="sign.jpg" alt="Pizza" className="image" />
//             <div className="image-text">
//               <h2>Need some Pizza, yo?</h2>
//               <p>
//                 C'mon and order from nearby Pizza delivery and pickup
//                 restaurants
//               </p>
//             </div>
//           </div>
//           <div className="form-section">
//             <form onSubmit={handleSignUp} className="form-container">
//               <h2>Busniess Sign Up</h2>
//               <div className="form-group">
//                 <label htmlFor="name">Username</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter Your Busniess Username"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">E-mail</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter Your Busniess E-mail"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter Your Busniess Password"
//                   required
//                 />
//               </div>
//               <button
//                 // onClick={handleSignUp}
//                 type="submit"
//                 className="sign-up-button"
//               >
//                 Sign Up
//               </button>
//               <span className="business-signup-link">
//                 <Link to="/signup">User Sign Up</Link>
//               </span>
//             </form>
//           </div>
//         </div>{" "}
//         {/* Add Footer component */}
//       </div>
//     </div>
//   );
// }
// export default BusniessSignup;

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
    const role = form.role.value;
    console.log(username, email, password, role);

    try {
      const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName: username, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User signed up successfully:", data);
        // Redirect or show success message
        navigate("/businessLogin");
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
            <input type="hidden" name="role" value="restaurantUser" />
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
