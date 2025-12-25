// src/components/Projects.jsx

import React from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Project Title One',
    description: 'A brief description of this project. It highlights my ability to use [Technology 1] and [Technology 2] to solve a specific problem.',
    technologies: 'React, Node.js, MongoDB',
    liveLink: '#', // Replace with live URL
    githubLink: '#', // Replace with GitHub URL
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'This project was built focusing on responsive design and performance. I learned a lot about [Specific Concept].',
    technologies: 'HTML5, CSS3, Vanilla JS',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'This project was built focusing on responsive design and performance. I learned a lot about [Specific Concept].',
    technologies: 'HTML5, CSS3, Vanilla JS',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'This project was built focusing on responsive design and performance. I learned a lot about [Specific Concept].',
    technologies: 'HTML5, CSS3, Vanilla JS',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'This project was built focusing on responsive design and performance. I learned a lot about [Specific Concept].',
    technologies: 'HTML5, CSS3, Vanilla JS',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'This project was built focusing on responsive design and performance. I learned a lot about [Specific Concept].',
    technologies: 'HTML5, CSS3, Vanilla JS',
    liveLink: '#',
    githubLink: '#',
  },
  // Add more projects here...
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="projects-grid">
          {projectData.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="technologies">
                **Tech Stack:** {project.technologies}
              </p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  View Live
                </a> 
                <span> | </span>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;