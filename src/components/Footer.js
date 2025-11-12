import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About / Portfolio summary */}
          <div className="footer-section">
            <h3>Lucas Chen</h3>
            <p>
              Computer Engineering student at the University of Waterloo. 
              Passionate about building projects that bridge software and hardware — 
              from cloud-based workflows to robotics prototypes.
            </p>
          </div>
          
          {/* Quick links to sections */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          
          {/* Social / Connect */}
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="https://www.linkedin.com/in/lucas-chen-5005aa382/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:lachenakis@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lucas Chen. All rights reserved.</p>
          <p>Designed & built by me using React!!!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;