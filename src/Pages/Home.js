import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import About from '../components/About';
import Mission from '../components/Mission';
import Social from '../components/Social';
import Footer from '../components/Footer';
import MissionMobile from '../components/MissionMobile';



function Home() {
  return (
    <div className="scroll-container">
      <Navbar></Navbar>
      <section className="snap-section hero-section">
      <Hero></Hero>
      </section>
      <section className="snap-section about-section">
      <About></About>
      </section>
      <section className="snap-section mission-section">
      <Mission />
      <MissionMobile />
      </section>
      <section className="snap-section social-section">
        <Social />
      </section>
      <section className="snap-section footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
