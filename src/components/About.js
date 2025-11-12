import React from 'react';
import Section from './Section';
import './About.css';

const About = () => {
  const interests = [
    { icon: '💻', title: 'Automation Scripting', description: 'Using programming software to unlock efficiency and solve menial everyday tasks' },
    { icon: '🧗', title: 'Outdoor Adventure', description: 'Outside of tech, I am an avid outdoorsman. Anything from rock climbing to MTB to skiing'},
    { icon: '🚀', title: 'Problem Solving', description: 'Applying math, logic, and engineering to real-world challenges' },
    { icon: '📚', title: 'Continuous Learning', description: 'Exploring new technologies and frameworks' }
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know me better"
      className="about-section"
    >
      <div className="about-content">
        <div className="about-text">
          <p className="about-bio">
            Hi, I’m Lucas Chen. I’m an engineering student at the University of Waterloo. 
            I love building automation scripts to create workflows for all kinds of tasks. Tools like Jenkins and Pexpect for tasks executed on the CLI, as well as tools like Selenium and PyAutoGUI to make everyday life more efficient. 
          </p>
          <p className="about-bio">
            Outside of work, I love spending time in the mountains. In the summers, I hit big rock slabs, drops and jumps. In the winters, I swap my bike for a pair of skis chasing big powder days, airtime and speed. I'm also a big rock climber, you'll often find me at my local climbing gym.

          </p>
          <div className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">Selenium</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
        <div className="about-interests">
          <h3>Personal Interests</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">{interest.icon}</div>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;