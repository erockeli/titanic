import React from "react";
import "../App.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div classname="navBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/">Database</NavLink>
      <NavLink to="/">FAQ</NavLink>
      <NavLink to="/">Our Excellent Team</NavLink>
    </div>
  );
}

export default NavBar;
