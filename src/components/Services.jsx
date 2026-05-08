import React from 'react';
import { MonitorSmartphone, ServerCog, Database, Workflow } from 'lucide-react';
import './Services.css';

const Services = ({ t }) => {
  const services = [
    { icon: <MonitorSmartphone size={32} />, title: t.services.s1Title, desc: t.services.s1Desc },
    { icon: <ServerCog size={32} />, title: t.services.s2Title, desc: t.services.s2Desc },
    { icon: <Database size={32} />, title: t.services.s3Title, desc: t.services.s3Desc },
    { icon: <Workflow size={32} />, title: t.services.s4Title, desc: t.services.s4Desc },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card glass">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
