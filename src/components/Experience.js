import React from 'react';
import Section from './Section';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Ciena Photonic SW Team",
      role: "Software Engineering Intern",
      period: "Jun 2024 – Sep 2024, May 2025 - Aug 2025",
      description:
        "Authored Jenkins automation test suite to monitor and diagnose system issues. Collaborated on pre-submission sanity scripts to support developers in the submission of software loads for various optical components.",
      technologies: ["Python", "Javascript", "Jenkins", "Jira", "Confluence", "Git"],
      image: "/images/ciena.jpg"          // ✅ public/images/ciena.jpg
    },
    {
      company: "Team Panorama, Panorama Mountain Resort",
      role: "Ski Racing Coach",
      period: "Sep 2024 – Apr 2025",
      description:
        "Designed and instructed step-by-step training programs for U10 ski racers. Set training and race courses to develop skills and strength of athletes.",
      technologies: ["Leadership", "Management","ACA-CSC Certified", "Level 1 Ski Racing Instructor"],
      image: "/images/panorama.jpg"       // ✅ public/images/panorama.jpg
    },
    {
      company: "Winsport, Canada Olympic Park",
      role: "Mountain Bike Instructor",
      period: "Jun 2023 – Sep 2023",
      description:
        "Taught beginner and intermediate mountain bike skills to children ages (6-11). Instructed the PMBIA fundamental skills and techniques. Administered first aid to basic injuries on trail.",
      technologies: ["Teaching", "Leadership", "Red Cross First Aid", "PMBIA Level 1"],
      image: "/images/winsport.jpg"       // ✅ public/images/winsport.jpg
    }
  ];

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey and contributions"
      className="experience-section"
    >
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Image side */}
            <div className="timeline-image-wrapper">
              <img src={exp.image} alt={exp.company} className="timeline-image" />
            </div>

            {/* Content box */}
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="role">{exp.role}</span>
                <span className="period">{exp.period}</span>
              </div>
              <p className="description">{exp.description}</p>
              <div className="technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
