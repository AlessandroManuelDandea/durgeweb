import React from "react";
import "../styles/ExploreContent.css";

const ExploreContent = () => {
  return (
    <div className="explorer_container">
      {/* DESKTOP: Table + Book */}
      <div className="table_container">
        <div className="book_container">
          <div className="left_div">
            <h2 className="left_div_title">Dive Into</h2>
            <h2 className="left_div_subtitle">the Abyss</h2>
            <div className="left_div_symbol"></div>
          </div>
          <div className="right_div">
            <div className="right_item_container">
              <a href="#developers" className="right_item_link">
                Developers
              </a>
            </div>
            <div className="right_item_container">
              <a href="#dev-logs" className="right_item_link">
                Dev Logs
              </a>
            </div>
            <div className="right_item_container">
              <a href="#games" className="right_item_link">
                Games
              </a>
            </div>
            <div className="right_item_container">
              <a href="#faq" className="right_item_link">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE: Scroll/Pergamena */}
      <div className="scroll_container">
        <div className="scroll_content">
       
          <h2 className="scroll_title"> Dive Into <br />
          the Abyss</h2>
         
          <ul className="scroll_links">
            <li>
              <a href="#developers">Developers</a>
            </li>
            <li>
              <a href="#dev-logs">Dev Logs</a>
            </li>
            <li>
              <a href="#games">Games</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExploreContent;
