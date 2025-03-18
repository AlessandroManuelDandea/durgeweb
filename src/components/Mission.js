import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Mission.css';
import missionIcon from '../img/about icon.png';

function Mission() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  // Varianti personalizzate per ogni testo
  const leftTextVariants = {
    hidden: { opacity: 0, x: 300, y: 0 }, // Parte dall'icona
    visible: {
      opacity: 1,
      x: 0, // Posizione finale a sinistra
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const rightTextVariants = {
    hidden: { opacity: 0, x: -300, y: 0 }, // Parte dall'icona
    visible: {
      opacity: 1,
      x: 0, // Posizione finale a destra
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const bottomTextVariants = {
    hidden: { opacity: 0, x: 0, y: -200 }, // Parte dall'icona
    visible: {
      opacity: 1,
      x: 0,
      y: 0, // Posizione finale in basso
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="mission_section">
      <motion.div
        className="mission_container"
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          className="mission_title"
          variants={titleVariants}
        >
          The Vision of Demiurgo
        </motion.h2>
        <div className="mission_grid">
          {/* Testo sinistro */}
          <motion.div
            className="mission_cell"
            variants={leftTextVariants}
          >
            <p className="mission_text">Crafting a one-of-a-kind portfolio</p>
          </motion.div>
          {/* Icona centrale */}
          <motion.div className="mission_cell">
            <motion.img
              src={missionIcon}
              alt="Mission Icon"
              className="mission_icon"
              variants={iconVariants}
              initial="hidden"
              animate={controls}
            />
          </motion.div>
          {/* Testo destro */}
          <motion.div
            className="mission_cell"
            variants={rightTextVariants}
          >
            <p className="mission_text">Shaping worlds, one story at a time</p>
          </motion.div>
          {/* Testo in basso */}
          <motion.div
            className="mission_cell mission_bottom"
            variants={bottomTextVariants}
          >
            <p className="mission_text">
              Breathing life into evocative illustrations
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Mission;
