// Navbar.js
import React, { useState } from "react";
import "../styles/Navbar.css";
import homeIcon from "../img/helmet.png";
import fileTextIcon from "../img/ancient-scroll.png";
import gamepadIcon from "../img/gaming.png";
import messageSquareIcon from "../img/qa.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: "Developers", icon: homeIcon, label: "Developers", link: "/Developers" },
    { id: "Devlogs", icon: fileTextIcon, label: "Dev Logs", link: "/DevLogs" },
    { id: "games", icon: gamepadIcon, label: "Games", link: "/Games" },
    { id: "q", icon: messageSquareIcon, label: "QA", link: "/Qa" },
  ];

  return (
    <nav className="navbar">
      {/* Logo (Link to homepage) */}
      <div className="navbar_logo">
        <Link to="/" className="navbar-logo-link">
          <h1>Demiurgo Mythos</h1>
        </Link>
      </div>

      {/* Hamburger button */}
      <button
        className="hamburger-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* Desktop Menu */}
      <ul className="navbar_menu desktop-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`menu_item ${hoveredItem === item.id ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="icon_text_container">
              <img
                src={item.icon}
                alt={item.label}
                className={`menu_icon ${
                  hoveredItem === item.id ? "icon_hover" : ""
                }`}
              />
              <div
                className={`hover_text_container ${
                  hoveredItem === item.id ? "expanded" : ""
                }`}
              >
                {hoveredItem === item.id && (
                  <div className="hover_text_container expanded">
                    <Link to={item.link} className="menu_label">
                      {item.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id} className="mobile-menu_item">
            <img
              src={item.icon}
              alt={item.label}
              className="mobile-menu_icon"
            />
            <Link to={item.link} className="mobile-menu_label">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
