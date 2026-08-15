import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="header">

      {/* Logo */}

      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      {/* Navigation */}

      <nav>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </NavLink>
          </li>

          <li>
            <NavLink to="/chef" onClick={() => setMenuOpen(false)}>
              Chefs
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>

        </ul>

      </nav>

      {/* Book Button */}

      <NavLink to="/booking">
        <button className="book-btn">
          Book a Table
        </button>
      </NavLink>

      {/* Mobile Icon */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>

  );
}

export default Header;