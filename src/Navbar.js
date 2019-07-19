import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
       <ul>
      	<li><NavLink to="/" exact>Home</NavLink></li>
      	<li><NavLink to="/new" exact>Add a Restaurant</NavLink></li>
      	<li><NavLink to="/random" exact>Pick Me</NavLink></li>
       </ul>
    </div>
  );
};

export default NavBar;