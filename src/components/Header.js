import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">JobRinger</Link>
      </div>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/contact">Contact</Link>
        <div className="auth-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/signup" className="btn signup-btn">Signup</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
