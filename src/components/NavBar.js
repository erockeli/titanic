import React from 'react';
import './App.css';

function NavBar() {
  
  return (
    <div classname="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink>Login</NavLink>
            <NavLink>Database</NavLink>
            <NavLink>FAQ</NavLink>
            <NavLink>Our Great Team</NavLink>
    </div>
  );
}

export default NavBar;
