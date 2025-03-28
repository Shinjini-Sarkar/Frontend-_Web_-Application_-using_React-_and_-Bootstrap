import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        {/* Navbar Toggler (for small screens) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/Products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
