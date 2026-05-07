import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ t }) => {
  const projects = [
    {
      id: 'project1',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/bouchelaghemmohammed/MBMarketDocker.git',
      demo: 'https://mbmarket.onrender.com',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'project2',
      tech: ['C#', '.NET', 'Blazor', 'SQL Server'],
      github: 'https://github.com/bouchelaghemmohammed/skolarisfront.git',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'project3',
      tech: ['React', 'Node.js', 'OpenAI API', 'Tailwind'],
      github: 'https://github.com/bouchelaghemmohammed/ai-content-generator',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'project4',
      tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
      github: 'https://github.com/bouchelaghemmohammed/crm-laravel',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'project5',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/bouchelaghemmohammed/finance-api',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'project6',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/bouchelaghemmohammed/task-collab',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card glass">
              <div className="project-image">
                <img src={proj.image} alt={t.projects[proj.id].title} />
              </div>
              <div className="project-content">
                <h3>{t.projects[proj.id].title}</h3>
                <p>{t.projects[proj.id].desc}</p>
                <div className="project-tech">
                  {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-actions">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FaGithub size={18} /> {t.projects.viewCode}
                  </a>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <ExternalLink size={18} /> {t.projects.liveDemo}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
