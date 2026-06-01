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
      tech: ['Java', 'Spring Boot / Wildfly', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/bouchelaghemmohammed/mbclinic.git',
      demo: '#',
      image: 'https://template.canva.com/EAFL_Fx2oQE/1/0/1600w-GG10jCiW3uA.jpg'
},
    {
      id: 'project4',
      tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
      github: 'https://github.com/bouchelaghemmohammed',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'project5',
      tech: ['Java', 'Jakarta EE / Tomcat', 'MySQL', 'Docker'],
      github: 'https://github.com/bouchelaghemmohammed/E-Boutique.git',
      demo: '#',
      image: 'https://cdn.shopify.com/s/files/1/0249/6376/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.webp?v=1731767741'
    },
    {
      id: 'project6',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/bouchelaghemmohammed/mohtasks.git',
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
                  {proj.demo !== '#' ? (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <ExternalLink size={18} /> {t.projects.liveDemo}
                    </a>
                  ) : (
                    <span className="btn-primary btn-disabled">
                      <ExternalLink size={18} /> {t.projects.liveDemo}
                    </span>
                  )}
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
