import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, BookOpen, FileText, UserPlus, Mail, Award  } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  // Track active section on scroll
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

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={16} className="text-theme-2" /> },
    { name: 'About Us', href: '#about', icon: <Info size={16} className="text-theme-4" /> },
    { name: 'Academics', href: '#academics', icon: <BookOpen size={16} className="text-theme-6" /> },
    { name: 'Our Legacy', href: '#legacy', icon: <Award size={16} className="text-theme-3" /> },
    { name: 'Admissions', href: '#admissions', icon: <UserPlus size={16} className="text-theme-3" /> },
    { name: 'CBSE Disclosures', href: '#cbse', icon: <FileText size={16} className="text-theme-1" /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} className="text-theme-5" /> },
  ];

  return (
    <header className="navbar">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex flex-col">
          <a href="#home" className="logo-title">TCV Selakui</a>
          <span className="logo-subtitle">| Others Before Self</span>
        </div>

        {/* Desktop Menu */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`nav-link ${activeHash === link.href ? 'active' : ''}`}
            >
              {link.icon && link.icon}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="hamburger-btn">
          {isOpen ? (
            <X size={28} className="hamburger-icon open" />
          ) : (
            <Menu size={28} className="hamburger-icon" />
          )}
        </button>
      </div>

      {/* Mobile Menu Wrapper (Handles the slide-down animation) */}
      <div className={`mobile-menu-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-scroll">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`nav-link-mobile ${activeHash === link.href ? 'active' : ''}`}
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