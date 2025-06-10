import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Shqiperia turistike</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Miresevini</Link>
        </li>
        <li>
          <Link to="/qarqet">Qarqet</Link>
        </li>
        <li>
          <Link to="/saved">Destinacionet e ruajtura</Link>
        </li>
        <li>
          <Link to="/history">Rreth nesh</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
