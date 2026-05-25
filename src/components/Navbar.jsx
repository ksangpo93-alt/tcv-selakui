import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, BookOpen, FileText, Award, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = '#' + section.getAttribute('id');
        }
      });
      setActiveHash(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks =[
    { name: 'Home', href: '#home', icon: <Home size={16} className="text-theme-2" /> },
    { name: 'About Us', href: '#about', icon: <Info size={16} className="text-theme-4" /> },
    { name: 'Academics', href: '#academics', icon: <BookOpen size={16} className="text-theme-6" /> },
    { name: 'Our Legacy', href: '#legacy', icon: <Award size={16} className="text-theme-3" /> },
    { name: 'Admissions', href: '#admissions' },
    { name: 'CBSE Disclosures', href: '#cbse', icon: <FileText size={16} className="text-theme-1" /> },
    { name: 'Contact', href: '#contact' },
    // NEW TCV SMS PORTAL LINK
    { name: 'TCV SMS', href: 'https://portal.tcvselakui.org/', external: true, isButton: true, icon: <LayoutDashboard size={16} /> }
  ];

  return (
    <header className="navbar">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 flex justify-between items-center">
        
        {/* LEFT SIDE: Logo Section */}
        <div className="flex items-center gap-3 md:gap-4">
          <a href="#home" className="logo-title">TCV Selakui</a>
          <div className="flex flex-col border-l-2 border-slate-200 pl-3 md:pl-4">
            <span className="tibetan-title">སེ་ལ་ཀུའི་བོད་ཁྱིམ་སློབ་གྲྭ།</span>
            <span className="logo-subtitle">Others Before Self</span>
          </div>
        </div>

        {/* RIGHT SIDE: Nav Links + Social Icons + Hamburger */}
        <div className="nav-right-container">
          
          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop">
            {navLinks.map((link) => {
              // Render as a Button if isButton is true
              if (link.isButton) {
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="btn-primary"
                    style={{ padding: '0.4rem 1.25rem', fontSize: '0.85rem', marginLeft: '0.5rem', display: 'flex', gap: '0.4rem' }}
                  >
                    {link.icon && link.icon}
                    {link.name}
                  </a>
                );
              }
              // Render as normal Nav Link
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`nav-link ${activeHash === link.href ? 'active' : ''}`}
                >
                  {link.icon && link.icon}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Social Media Icons */}
          <div className="nav-social-icons">
            <a href="https://www.facebook.com/tcvschoolselakui/" target="_blank" rel="noopener noreferrer" className="social-icon-link fb" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/tcvselakui/" target="_blank" rel="noopener noreferrer" className="social-icon-link ig" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@tcvschoolselakui" target="_blank" rel="noopener noreferrer" className="social-icon-link yt" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.17C2.85 5.56 4.12 4.3 5.73 3.95 7.9 3.5 12 3.5 12 3.5s4.1 0 6.27.45c1.61.35 2.88 1.61 3.23 3.22.45 2.17.45 6.83.45 6.83s0 4.66-.45 6.83c-.35 1.61-1.62 2.87-3.23 3.22-2.17.45-6.27.45-6.27.45s-4.1 0-6.27-.45c-1.61-.35-2.88-1.61-3.23-3.22-.45-2.17-.45-6.83-.45-6.83s0-4.66.45-6.83Z"/><polygon points="9.75 15.02 15.5 11.5 9.75 7.98 9.75 15.02"/></svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="hamburger-btn">
            {isOpen ? <X size={28} className="hamburger-icon open" /> : <Menu size={28} className="hamburger-icon" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-scroll">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)} 
              className={`nav-link-mobile ${activeHash === link.href && !link.external ? 'active' : ''} ${link.isButton ? 'bg-slate-50 text-teal-700 font-bold border-l-4 border-l-teal-600' : ''}`}
            >
              {link.icon && link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}