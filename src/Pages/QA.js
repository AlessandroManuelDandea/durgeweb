// src/pages/QA.js
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/QA.css"; // Assicurati di importare il CSS

export default function QA() {
  return (
    <div className="qa-page">
      <Navbar />
      <div className="qa-content">
        <h2 className="qa-title">Q/A</h2>
        <p className="qa-message">
          At the moment it's not available due to the lack of a backend. 
          The site is hosted on GitHub Pages, so we can't integrate a server. 
          It will come in the future!
        </p>
      </div>
    </div>
  );
}
