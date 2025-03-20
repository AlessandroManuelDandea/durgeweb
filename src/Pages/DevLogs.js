// src/pages/DevLogs.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import devLogs from "../data/devLogsData";
import DevLogCard from "../components/DevLogCard";
import "../styles/Devlogs.css";

export default function DevLogs() {
  // Ordina i Dev Logs in ordine decrescente (più recente in cima)
  const sortedDevLogs = devLogs.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  // Varianti per il container: applica uno stagger per i figli
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  // Varianti per ogni card: inizialmente opacità 0 e traslazione a sinistra
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="devlogs-page">
      <Navbar />
      <motion.h2
        className="devlogs-title"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dev Logs
      </motion.h2>
      <motion.div
        className="devlogs-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sortedDevLogs.map((log) => (
          <motion.div key={log.id} variants={cardVariants}>
            <DevLogCard
              authorLogo={log.authorLogo}
              authorName={log.authorName}
              date={log.date}
              content={log.content}
              link={log.link}
              linkText={log.linkText}
              image={log.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
