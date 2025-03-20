// src/pages/Developers.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import DeveloperCard from "../components/DeveloperCard";
import developers from "../data/developersData";
import "../styles/Developers.css";

export default function Developers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="developers-page">
      <Navbar />

      <motion.h2
        className="font-oldenglishtextmt text-4xl text-colors-redBright w-full max-w-5xl text-left mb-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Developers
      </motion.h2>

      <motion.div
        className="w-full max-w-5xl flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {developers.map((dev) => (
          <motion.div key={dev.id} variants={cardVariants}>
            <DeveloperCard
              logo={dev.logo}
              name={dev.name}
              socials={dev.socials}
              background={dev.background}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
