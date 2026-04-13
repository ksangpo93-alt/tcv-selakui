import React from 'react';

export default function Footer() {
  return (
    <footer className="footer px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <h3 className="footer-title mb-2">TCV Selakui</h3>
            <p className="footer-subtitle mb-4">སེ་ལ་ཀུའི་བོད་ཁྱིམ་སློབ་གྲྭ། | Others Before Self</p>
            <p className="footer-text mb-6">Working for the care and education of Tibetan refugee children, blending modern excellence with traditional wisdom.</p>
            
            {/* Social Icons Container with increased gap/margin */}
            <div className="flex gap-6 mt-2">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/tcvschoolselakui/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-icon-link text-theme-2"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/tcvselakui/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-icon-link text-theme-5"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@tcvschoolselakui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-icon-link text-theme-6"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.17C2.85 5.56 4.12 4.3 5.73 3.95 7.9 3.5 12 3.5 12 3.5s4.1 0 6.27.45c1.61.35 2.88 1.61 3.23 3.22.45 2.17.45 6.83.45 6.83s0 4.66-.45 6.83c-.35 1.61-1.62 2.87-3.23 3.22-2.17.45-6.27.45-6.27.45s-4.1 0-6.27-.45c-1.61-.35-2.88-1.61-3.23-3.22-.45-2.17-.45-6.83-.45-6.83s0-4.66.45-6.83Z"/><polygon points="9.75 15.02 15.5 11.5 9.75 7.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="footer-title-sm mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#admissions" className="footer-link">Admissions</a></li>
              <li><a href="#academics" className="footer-link">Academics</a></li>
              <li><a href="#cbse" className="footer-link">CBSE Disclosures</a></li>
              <li><a href="#newsletter" className="footer-link">Newsletter</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="footer-title-sm mb-4">Contact</h3>
            <ul className="flex flex-col gap-2 footer-text">
              <li>P.O. Selakui, Dehradun</li>
              <li>Uttarakhand, India - 248011</li>
              <li>Phone: +91 00000 00000</li>
              <li>Email: selakui@tcv.org.in</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Tibetan Children's Village School Selakui. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}