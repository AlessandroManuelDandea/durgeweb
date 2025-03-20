// src/pages/Games.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Games.css";
import Navbar from "../components/Navbar";
import GamePopup from "../components/GamePopup";
import games from "../data/gamesData";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const openPopup = (game) => setSelectedGame(game);
  const closePopup = () => setSelectedGame(null);

  const categories = ["Games out!", "Work in progress", "Ideas"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="games-page">
      <Navbar />

      <motion.div
        className="games-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => (
          <React.Fragment key={category}>
            <motion.h2 variants={itemVariants} className="category-title">
              {category}
            </motion.h2>

            {games.filter((game) => game.category === category).length > 0 ? (
              games
                .filter((game) => game.category === category)
                .map((game) => (
                  <motion.div
                    key={game.id}
                    variants={itemVariants}
                    className="game-label"
                    style={{ backgroundImage: `url(${game.image})` }}
                    onClick={() => openPopup(game)}
                  >
                    <span className="game-title-overlay">{game.title}</span>
                  </motion.div>
                ))
            ) : (
              <motion.div variants={itemVariants} className="game-label empty-label">
                <span className="game-title-overlay">N/A</span>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {selectedGame && (
        <GamePopup
          title={selectedGame.title}
          description={selectedGame.description}
          image={selectedGame.image}
          onClose={closePopup}
        />
      )}
    </div>
  );
}
