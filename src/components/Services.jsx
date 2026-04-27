import React from 'react';
import { MonitorSmartphone, ServerCog, Database } from 'lucide-react';
import './Services.css';

const Services = ({ t }) => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        <div className="services-grid">
          <div className="service-card glass">
            <div className="service-icon">
              <MonitorSmartphone size={32} />
            </div>
            <h3>{t.services.s1Title}</h3>
            <p>{t.services.s1Desc}</p>
          </div>
          <div className="service-card glass">
            <div className="service-icon">
              <ServerCog size={32} />
            </div>
            <h3>{t.services.s2Title}</h3>
            <p>{t.services.s2Desc}</p>
          </div>
          <div className="service-card glass">
            <div className="service-icon">
              <Database size={32} />
            </div>
            <h3>{t.services.s3Title}</h3>
            <p>{t.services.s3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
