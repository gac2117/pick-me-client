import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={{background: 'red'}}>Home</NavLink>
      <NavLink to="/new" exact style={link} activeStyle={{background: 'red'}}>Add a Restaurant</NavLink>
      <NavLink to="/restaurants" exact style={link} activeStyle={{background: 'red'}}>List of Restaurants</NavLink>
    </div>
  );
};

export default NavBar;