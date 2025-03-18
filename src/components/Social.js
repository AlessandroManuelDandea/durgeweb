import React, { useRef, useState, useEffect } from "react";
import "../styles/Social.css";

import eyeImg from "../img/eye.png";
import instagramIcon from "../img/instagram.png";
import xIcon from "../img/X.png";
import itchIcon from "../img/itch.png";
import youtubeIcon from "../img/youtube.png";

function Social() {
  const [inView, setInView] = useState(false);
  const [dropDone, setDropDone] = useState([false, false, false, false]);
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

  const handleAnimationEnd = (index) => {
    setDropDone((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const getEyeClass = (index, delayClass) => {
    if (inView && !dropDone[index]) {
      return `eye-container drop-down-bounce ${delayClass}`;
    }
    return "eye-container";
  };

  return (
    <section ref={sectionRef} className="social-section">
      <div className="social-bg"></div>
      <div className="social-overlay"></div>
      <div className="social-overlay-green"></div>

      <div className="social-content">
        <div className="eyes-container">
          {/* Occhio #1 - Instagram */}
          <a
            href="https://www.instagram.com/durgeart/"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(0, "delay-0")}
            onAnimationEnd={() => handleAnimationEnd(0)}
          >
            <img src={eyeImg} alt="Eye" className="eye-bg" />
            <img src={instagramIcon} alt="Instagram" className="eye-icon" />
          </a>

          {/* Occhio #2 - X (ex Twitter) */}
          <a
            href="https://x.com/DurgeGames"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(1, "delay-1")}
            onAnimationEnd={() => handleAnimationEnd(1)}
          >
            <img src={eyeImg} alt="Eye" className="eye-bg" />
            <img src={xIcon} alt="X" className="eye-icon" />
          </a>

          {/* Occhio #3 - Itch.io */}
          <a
            href="https://durgegames.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(2, "delay-2")}
            onAnimationEnd={() => handleAnimationEnd(2)}
          >
            <img src={eyeImg} alt="Eye" className="eye-bg" />
            <img src={itchIcon} alt="Itch.io" className="eye-icon" />
          </a>

          {/* Occhio #4 - YouTube */}
          <a
            href="https://www.youtube.com/@DurgeLog"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(3, "delay-3")}
            onAnimationEnd={() => handleAnimationEnd(3)}
          >
            <img src={eyeImg} alt="Eye" className="eye-bg" />
            <img src={youtubeIcon} alt="YouTube" className="eye-icon" />
          </a>
        </div>

        {/* TITOLO E TESTO */}
        <h2 className={`social-title ${inView ? "fade-in-up delay-1" : ""}`}>
          Echoes of the Demiurge
        </h2>
        <p className={`social-subtitle ${inView ? "fade-in-up delay-2" : ""}`}>
          Stay updated with our latest news, projects, and behind-the-scenes
          content. Connect with us on social media and be part of the journey.
        </p>
      </div>
    </section>
  );
}

export default Social;
