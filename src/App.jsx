import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Helmet } from 'react-helmet-async'; // Importing Helmet for SEO management
import { About, History, MissionVision, Goals, Philosophy } from './components/AboutSections';
import { Principal, Academics, Facilities, StudentLife, Legacy } from './components/SchoolSections';
import { Admissions, Newsletter, CBSE, Contact } from './components/InfoSections';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Helmet>
        <title>TCV Selakui | Best Tibetan School in Exile | Top CBSE School</title>
        
        <meta name="description" content="The premier TCV Model School for gifted students. We prepare Tibetan toppers for elite global universities like MIT, Stanford, Yale, and Seoul University." />
        
        <meta name="keywords" content="Top Tibetan School, Best Tibetan School in Exile, TCV Model School, Elite Tibetan Education, Tibetan Students MIT Stanford, TCV Selakui Admissions" />
      </Helmet>
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
          <Legacy />
          <Admissions />
          <Newsletter />
          <CBSE />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;