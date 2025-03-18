import React from "react";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      {/* Main block: text on the left, contacts+social on the right */}
      <div className="footer-inner">
        {/* Left side: thank-you message */}
        <div className="footer-left">
          <h2 className="thankyou-title">Thank you for reaching the end!</h2>
          <p className="thankyou-text">
            We are delighted to have guided you through this dark and fantastic journey.
            We hope to see you again soon.
          </p>
        </div>

        {/* Right side: contacts and social stacked vertically */}
        <div className="footer-right">
          <div className="footer-column">
            <h3 className="footer-heading">Contacts</h3>
            {/* No wrap on the email line */}
            <p className="footer-email">
              Email: durgedeveloper@gmail.com
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>
            <ul className="footer-list">
              <li>
                <a href="https://www.instagram.com/durgeart/" className="footer-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/DurgeGames" className="footer-link">
                  X
                </a>
              </li>
              <li>
                <a href="https://durgegames.itch.io/" className="footer-link">
                  Itch.io
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@DurgeLog" className="footer-link">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        Demiurgo Mythos © {currentYear} – All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
