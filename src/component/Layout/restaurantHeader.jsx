// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import "./Header.css";

// const restaurantHeader = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Handle the search logic here
//     console.log("Search for:", searchQuery);
//   };
//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <Link to="/">FoodExpress</Link>
//         </div>
//         <nav className="nav-links">
//           <Link to="/home">Home</Link>
//           <Link to="/cart">Food Menu</Link>
//           <Link to="/aboutus">Payment</Link>
//           <Link to="/contactus">Profile</Link>
//         </nav>
//         <form className="search-form" onSubmit={handleSearchSubmit}>
//           <input
//             type="search"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             aria-label="Search"
//           />
//           <button type="submit">
//             <FaSearch />
//           </button>
//         </form>
//       </div>
//     </header>
//   );
// };

// export default restaurantHeader;
