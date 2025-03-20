import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/MissionMobile.css';
import missionIcon from '../img/about icon.png';

function MissionMobile() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const iconVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="mission_section_mobile">
      <motion.div className="mission_container_mobile" initial="hidden" animate={controls}>
        <div className="mobile_toprow">
          <motion.img
            src={missionIcon}
            alt="Mission Icon"
            className="mission_icon_mobile"
            variants={iconVariants}
          />
        </div>
        <motion.h2 className="mission_title_mobile" variants={titleVariants}>
          The Vision of Demiurgo
        </motion.h2>

        <motion.p className="mission_text_mobile" variants={textVariants}>
        Crafting a unique and immersive portfolio to showcase creative projects, original ideas, and captivating content
        </motion.p>
        <motion.p className="mission_text_mobile" variants={textVariants}>
        Shaping immersive worlds and unforgettable experiences, one compelling story at a time
        </motion.p>
        <motion.p className="mission_text_mobile" variants={textVariants}>
        Breathing life into evocative illustrations that inspire curiosity and ignite imagination
        </motion.p>
      </motion.div>
    </section>
  );
}

export default MissionMobile;
