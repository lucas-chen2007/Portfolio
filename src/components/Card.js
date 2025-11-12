import React from 'react';
import './Card.css';

const Card = ({ title, description, techStack, githubLink, demoLink, image }) => {
  return (
    <div className="card">
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
            >
              <span>📁</span> GitHub
            </a>
          )}
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-link demo"
            >
              <span>🌐</span> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
