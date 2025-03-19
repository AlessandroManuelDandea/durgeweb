import React, { useRef, useState, useEffect } from "react";
import "../styles/Social.css";

// Remove eyeImg import, keep only the social icons
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

  // Called at end of each dropDown bounce
  const handleAnimationEnd = (index) => {
    setDropDone((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  // Conditionally add drop-down bounce if inView and not done
  const getEyeClass = (index, delayClass) => {
    if (inView && !dropDone[index]) {
      return `eye-container drop-down-bounce ${delayClass}`;
    }
    return "eye-container";
  };

  return (
    <section ref={sectionRef} className="social-section">
      {/* If on mobile, we may have a background + overlays. 
          On desktop, only bg-colors-dark. */}
      <div className="social-bg"></div>
      <div className="social-overlay"></div>
      <div className="social-overlay-green"></div>

      <div className="social-content">
        {/* Text above the icons */}
        <h2 className={`social-title ${inView ? "fade-in-up delay-1" : ""}`}>
          Echoes of the Demiurge
        </h2>
        <p className={`social-subtitle ${inView ? "fade-in-up delay-2" : ""}`}>
          Stay updated with our latest news, projects, and behind-the-scenes
          content. Connect with us on social media and be part of the journey.
        </p>

        {/* Social icons below */}
        <div className="eyes-container">
          {/* Icon #1: Instagram */}
          <a
            href="https://www.instagram.com/durgeart/"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(0, "delay-0")}
            onAnimationEnd={() => handleAnimationEnd(0)}
          >
            <img src={instagramIcon} alt="Instagram" className="eye-icon" />
          </a>

          {/* Icon #2: X */}
          <a
            href="https://x.com/DurgeGames"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(1, "delay-1")}
            onAnimationEnd={() => handleAnimationEnd(1)}
          >
            <img src={xIcon} alt="X" className="eye-icon" />
          </a>

          {/* Icon #3: Itch.io */}
          <a
            href="https://durgegames.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(2, "delay-2")}
            onAnimationEnd={() => handleAnimationEnd(2)}
          >
            <img src={itchIcon} alt="Itch.io" className="eye-icon" />
          </a>

          {/* Icon #4: YouTube */}
          <a
            href="https://www.youtube.com/@DurgeLog"
            target="_blank"
            rel="noopener noreferrer"
            className={getEyeClass(3, "delay-3")}
            onAnimationEnd={() => handleAnimationEnd(3)}
          >
            <img src={youtubeIcon} alt="YouTube" className="eye-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;
