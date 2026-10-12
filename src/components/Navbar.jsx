import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Student Portal</h1>
      <div className="nav-links">
        <Link to="/"> Student List </Link> <br/>
        <Link to="/favourites"> Favourites </Link>
      </div>
    </nav>
  );
};

export default Navbar;
