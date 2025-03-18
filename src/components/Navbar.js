import React, { useState } from "react";
import "../styles/Navbar.css";
import homeIcon from "../img/helmet.png";
import fileTextIcon from "../img/ancient-scroll.png";
import gamepadIcon from "../img/gaming.png";
import messageSquareIcon from "../img/qa.png";

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: "home", icon: homeIcon, label: "Developers" },
    { id: "documents", icon: fileTextIcon, label: "Dev Logs" },
    { id: "games", icon: gamepadIcon, label: "Games" },
    { id: "faq", icon: messageSquareIcon, label: "FAQ" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar_logo">
        <h1>Demiurgo Mythos</h1>
      </div>

      {/* Hamburger button (only shown on mobile via CSS) */}
      <button
        className="hamburger-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* DESKTOP MENU (hover expansions) */}
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
                    <a href={`#${item.id}`} className="menu_label">
                      {item.label}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* MOBILE MENU (slide-down animation), always in the DOM but toggled by class */}
      <ul className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id} className="mobile-menu_item">
            <img src={item.icon} alt={item.label} className="mobile-menu_icon" />
            <a href={`#${item.id}`} className="mobile-menu_label">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
