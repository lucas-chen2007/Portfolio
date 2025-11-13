import React from 'react';
import Section from './Section';
import Card from './Card';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Imposter Game",
      description:
        "Designed personalized version of the imposter game.",
      techStack: ["CSS", "HTML", "JavaScript"],
      githubLink: "https://github.com/lucas-chen2007/Imposter",    
      demoLink: "https://imposter.lucaschen.ca",      
      image: "/images/imposter.png"      
    },
    {
      title: "More Projects Coming",
      description:
        "Actively building new things — check back soon for updates.",
      techStack: ["Python", "Pytorch"],
      githubLink: "",
      demoLink: "",
      image: null
    }
  ];

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I've built!"
      className="projects-section"
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;