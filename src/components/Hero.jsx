import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center pt-32 pb-32 lg:pt-40 lg:pb-48 section-hero">
      <div className="absolute inset-0 z-0 hero-bg-image">
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="hero-tag mb-6">CBSE Affiliated Institution</div>
        
        <h1 className="heading-xl mb-4">Tibetan Children's Village School Selakui</h1>
        
        <h2 className="heading-lg subtitle-muted mb-6">
          སེ་ལ་ཀུའི་བོད་ཁྱིམ་སློབ་གྲྭ། <span className="block mt-2 font-normal">རང་ལས་གཞན་གཅེས།</span>
        </h2>
        
        <p className="body-text-lg mb-2">Working for the care and education of Tibetan refugee children</p>
        
        <p className="body-text max-w-2xl mx-auto mb-10">
          Need of having a special school for gifted and talented students was one of the dream project of Ama Jetsun Pema La.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#about" className="btn-primary">Learn More About Us</a>
          <a href="#admissions" className="btn-secondary">Admissions 2026</a>
        </div>
      </div>
    </section>
  );
}