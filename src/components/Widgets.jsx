import React, { useState, useEffect } from 'react';
import { Activity, Server, Database, Code, Terminal, Layers } from 'lucide-react';
import './Widgets.css';

const Widgets = ({ t }) => {
  const [pulse, setPulse] = useState(true);
  const [codeLine, setCodeLine] = useState(0);

  const codeSnippet = [
    "pipeline {",
    "  agent any",
    "  stages {",
    "    stage('Build & Test') {",
    "      steps {",
    "        sh 'npm ci && npm test'",
    "        sh 'sonar-scanner'",
    "      }",
    "    }",
    "    stage('Deploy') {",
    "      steps {",
    "        sh 'kubectl apply -f k8s/'",
    "      }",
    "    }",
    "  }",
    "}"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLine(prev => (prev + 1) % codeSnippet.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [codeSnippet.length]);

  return (
    <section id="skills" className="widgets-section">
      <div className="container">
        <h2 className="section-title">{t.widgets.title}</h2>
        
        <div className="widgets-grid">
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
                <span className="label">Production Cluster (k8s) CPU</span>
                <div className="bar-bg"><div className="bar-fill cpu" style={{ width: '42%' }}></div></div>
              </div>
              <div className="metric">
                <span className="label">Database Read Replicas RAM</span>
                <div className="bar-bg"><div className="bar-fill ram" style={{ width: '68%' }}></div></div>
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

          {/* Stack Widget */}
          <div className="widget glass stack-widget">
            <div className="widget-header">
              <Layers className="widget-icon" />
              <h3>Tech Stack</h3>
            </div>
            <div className="stack-grid">
              <div className="stack-item">
                <Code size={28} />
                <span>{t.widgets.frontend}</span>
              </div>
              <div className="stack-item">
                <Server size={28} />
                <span>{t.widgets.backend}</span>
              </div>
              <div className="stack-item">
                <Database size={28} />
                <span>{t.widgets.database}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
