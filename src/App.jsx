import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, History, MissionVision, Goals, Philosophy } from './components/AboutSections';
import { Principal, Academics, Facilities, StudentLife } from './components/SchoolSections';
import { Admissions, Newsletter, CBSE, Contact } from './components/InfoSections';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <MissionVision />
        <Goals />
        <Philosophy />
        <Principal />
        <Academics />
        <Facilities />
        <StudentLife />
        <Admissions />
        <Newsletter />
        <CBSE />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;