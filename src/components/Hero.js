import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero_overlay"></div>
      <motion.div
        className="hero_content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="hero_title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Demiurgo Mythos
        </motion.h1>
        <motion.p
          className="hero_subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Forging dark worlds for those who dare to explore.
        </motion.p>
        <motion.a
          href="#whats-new"
          className="hero_cta"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          What's new?
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;