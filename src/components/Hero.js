import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Lucas Chen</h1>
            <p className="hero-tagline">Computer Engineering Student • Software + Automation Scripting</p>
            <p className="hero-description">
            I'm a Computer Engineering student at the University of Waterloo passionate about using automation software to improve efficiency and ease in everyday tasks and other real-world applications. I love working with both software and hardware, seeing the development of an idea into a prototype to a final product.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img 
                src="/images/headshot.png" 
                alt="Profile" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="profile-placeholder">
                <span>👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
