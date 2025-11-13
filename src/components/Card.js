import React from 'react';
import './Card.css';

const Card = ({ title, description, techStack, githubLink, demoLink, image }) => {
  const link = demoLink; // use demo first, fallback to GitHub

  const CardContent = () => (
    <>
      <div className="card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="card-placeholder">
            <span>🚀</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tech">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="card-links">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-link github"
              onClick={(e) => e.stopPropagation()} // prevents double navigation
            >
              <span>📁</span> GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );

  return link ? (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="card"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <CardContent />
    </a>
  ) : (
    <div className="card">
      <CardContent />
    </div>
  );
};

export default Card;
