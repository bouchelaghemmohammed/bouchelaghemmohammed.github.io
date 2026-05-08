import React, { useState, useEffect } from 'react';
import { Activity, Terminal, Code2, Server, Database, Cpu } from 'lucide-react';
import './Widgets.css';

const techStack = [
  {
    category: 'frontend',
    icon: <Code2 size={20} />,
    items: ['React', 'Next.js', 'TypeScript', 'Angular', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'backend',
    icon: <Server size={20} />,
    items: ['Node.js / Express', 'PHP / Laravel', 'Java / Spring Boot', 'C# / .NET', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'database',
    icon: <Database size={20} />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server', 'Prisma ORM'],
  },
  {
    category: 'devops',
    icon: <Cpu size={20} />,
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Linux / Bash', 'AWS / Azure'],
  },
];

const codeSnippet = [
  'pipeline {',
  '  agent any',
  '  stages {',
  "    stage('Build') {",
  '      steps {',
  "        sh 'npm ci && npm test'",
  "        sh 'sonar-scanner'",
  '      }',
  '    }',
  "    stage('Deploy') {",
  '      steps {',
  "        sh 'docker build -t app .'",
  "        sh 'kubectl apply -f k8s/'",
  '      }',
  '    }',
  '  }',
  '}',
];

const Widgets = ({ t }) => {
  const [pulse, setPulse] = useState(true);
  const [codeLine, setCodeLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLine(prev => (prev + 1) % codeSnippet.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="widgets-section">
      <div className="container">
        <h2 className="section-title">{t.widgets.title}</h2>

        <div className="widgets-top-row">
          {/* Status Widget */}
          <div className="widget glass">
            <div className="widget-header">
              <Activity className="widget-icon" />
              <h3>{t.widgets.liveStatus}</h3>
            </div>
            <div className="status-indicator">
              <div className={`status-dot ${pulse ? 'pulse' : ''}`}></div>
              <span>{t.widgets.statusOnline}</span>
            </div>
            <div className="server-metrics">
              <div className="metric">
                <div className="metric-label-row">
                  <span className="label">Production Cluster (k8s)</span>
                  <span className="metric-value">42%</span>
                </div>
                <div className="bar-bg"><div className="bar-fill cpu" style={{ width: '42%' }}></div></div>
              </div>
              <div className="metric">
                <div className="metric-label-row">
                  <span className="label">Database Read Replicas</span>
                  <span className="metric-value">68%</span>
                </div>
                <div className="bar-bg"><div className="bar-fill ram" style={{ width: '68%' }}></div></div>
              </div>
              <div className="metric">
                <div className="metric-label-row">
                  <span className="label">API Gateway Load</span>
                  <span className="metric-value">31%</span>
                </div>
                <div className="bar-bg"><div className="bar-fill api" style={{ width: '31%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Code Widget */}
          <div className="widget glass code-widget">
            <div className="widget-header">
              <Terminal className="widget-icon" />
              <h3>{t.widgets.tools}</h3>
            </div>
            <div className="code-editor">
              <div className="editor-dots">
                <span></span><span></span><span></span>
              </div>
              <pre className="code-content">
                <code>
                  {codeSnippet.map((line, idx) => (
                    <div key={idx} className={`code-line ${idx === codeLine ? 'active-line' : ''}`}>
                      <span className="line-num">{idx + 1}</span>
                      {line}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Tech Arsenal — full width */}
        <div className="widget glass tech-arsenal">
          <div className="widget-header">
            <Code2 className="widget-icon" />
            <h3>{t.widgets.techArsenal}</h3>
          </div>
          <div className="arsenal-grid">
            {techStack.map(group => (
              <div key={group.category} className="arsenal-group">
                <div className="arsenal-category">
                  <span className="cat-icon">{group.icon}</span>
                  <span className="cat-label">{t.widgets[group.category]}</span>
                </div>
                <div className="arsenal-badges">
                  {group.items.map(item => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
