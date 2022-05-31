// import React from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "./Auth";
// export const Navbar = () => {
//   const navLinkStyle = ({ isActive }) => {};
//   const auth = useAuth()
//   return (
//     <nav className="primary-nav">
//       <NavLink style={navLinkStyle} to="/">
//         Home
//       </NavLink>
//       <NavLink style={navLinkStyle} to="/about">
//         About
//       </NavLink>
//       <NavLink style={navLinkStyle} to="/products">
//         Products
//       </NavLink>
//       <NavLink style={navLinkStyle} to="/profile">
//         Profile
//       </NavLink>
//       {!auth.user && (
//         <NavLink style={navLinkStyle} to="/login">
//         LOGIN
//       </NavLink>
//       )}
//     </nav>
//   );
// };

import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();
  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to="/profile" style={navLinkStyles}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink to="/login" style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  );
};
