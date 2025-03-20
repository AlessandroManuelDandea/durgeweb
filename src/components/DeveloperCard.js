// src/components/DeveloperCard.js
import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaYoutube, FaItchIo  } from "react-icons/fa";

export default function DeveloperCard({ logo, name, socials, background }) {
  const socialIcons = {
    twitter: <FaTwitter size={20} />,
    instagram: <FaInstagram size={20} />,
    github: <FaGithub size={20} />,
    youtube: <FaYoutube size={20} />,
    itchio: <FaItchIo size={20} />,  // ← Aggiunto itch.io qui
  };

  return (
    <div
      className="developer-card"
      style={{ "--dev-background": `url(${background})` }}
    >
      <div className="dev-info">
        <img src={logo} alt={name} className="dev-logo" />
        <span className="dev-name">{name}</span>
      </div>

      <div className="social-icons">
        {Object.entries(socials).map(([key, url]) => (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer">
            {socialIcons[key]}
          </a>
        ))}
      </div>
    </div>
  );
}
