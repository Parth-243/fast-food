// // src/components/Header.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import "./Header.css";

// function Header() {
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
//           <Link to="/cart">Cart</Link>
//           <Link to="/aboutus">About Us</Link>
//           <Link to="/contactus">Contact Us</Link>
//           <Link to="/signup">Sign Up</Link>
//           <Link to="/login">Login</Link>
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
// }

// export default Header;

// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
  };

  return (
    <header className={styles.header}>
      {" "}
      {/* Use styles.header */}
      <div className={styles.headerContainer}>
        {" "}
        {/* Use styles.headerContainer */}
        <div className={styles.logo}>
          <Link to="/">FoodExpress</Link>
        </div>
        <nav className={styles.navLinks}>
          {" "}
          {/* Use styles.navLinks */}
          <Link to="/home">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
        <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            {" "}
            {/* Use styles.searchButton */}
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
