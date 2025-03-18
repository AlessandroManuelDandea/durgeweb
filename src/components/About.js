import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import img from '../img/about.png';

function About() {
  return (
    <section className="about_section">
      <motion.div
        className="about_container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // L'animazione si attiva solo una volta
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        }}
      >
        <div className="about_title">
          <motion.div
            className="about_icon"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            viewport={{ once: true }} // Attivazione unica
          >
            <img src={img} alt="Icon" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Attivazione unica
          >
            About Demiurgo Mythos
          </motion.h2>
        </div>
        <motion.div
          className="about_content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Attivazione unica
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.5 },
            },
          }}
        >
          <motion.div
            className="about_text"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>
              Demiurgo is currently a vision, a goal driven by the desire to
              create a company dedicated to crafting dark fantasy video games.
              At this stage, it remains a future project, a dream waiting to be
              realized. However, with time, effort, and unwavering dedication,
              Demiurgo has the potential to take shape and become a reality.
            </p>
          </motion.div>
          <motion.div
            className="about_text"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>
              This journey is about forging immersive, otherworldly experiences
              for those who dare to explore the dark and mysterious realms of
              fantasy. Demiurgo embodies a passion for storytelling, art, and
              innovation, aiming to one day leave its mark in the world of
              gaming.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
