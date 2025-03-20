import React, { useRef, useState, useEffect } from "react";
import "../styles/Social.css";

// Social Icons
import instagramIcon from "../img/instagram.png";
import xIcon from "../img/X.png";
import itchIcon from "../img/itch.png";
import youtubeIcon from "../img/youtube.png";

function Social() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getEyeClass = (index, delayClass) => {
    if (inView) {
      return `eye-container slide-from-left ${delayClass}`;
    }
    return "eye-container";
  };

  return (
    <section ref={sectionRef} className="social-section">
      <div className="social-bg"></div>
      <div className="social-overlay"></div>
      <div className="social-overlay-green"></div>

      <div className="social-content">
        {/* Titolo e sottotitolo */}
        <h2 className={`social-title ${inView ? "slide-from-left delay-1" : ""}`}>
          Echoes of the Demiurge
        </h2>
        <p className={`social-subtitle ${inView ? "slide-from-left delay-2" : ""}`}>
          Stay updated with our latest news, projects, and behind-the-scenes content.
          Connect with us on social media and be part of the journey.
        </p>

        {/* Social Icons */}
        <div className="eyes-container">
          <a
            href="https://www.instagram.com/durgeart/"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(0, "delay-0")}
          >
            <img src={instagramIcon} alt="Instagram" className="eye-icon" />
          </a>

          <a
            href="https://x.com/DurgeGames"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(1, "delay-1")}
          >
            <img src={xIcon} alt="X" className="eye-icon" />
          </a>

          <a
            href="https://durgegames.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(2, "delay-2")}
          >
            <img src={itchIcon} alt="Itch.io" className="eye-icon" />
          </a>

          <a
            href="https://www.youtube.com/@DurgeLog"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(3, "delay-3")}
          >
            <img src={youtubeIcon} alt="YouTube" className="eye-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;
