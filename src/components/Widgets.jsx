import { Code2, Server, Database, Cpu, Briefcase, Clock, GitBranch, CheckCircle } from 'lucide-react';
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

const Widgets = ({ t }) => {
  const stats = [
    { icon: <Clock size={24} />, value: '2+', label: t.widgets.stat1Label },
    { icon: <Briefcase size={24} />, value: '6+', label: t.widgets.stat2Label },
    { icon: <GitBranch size={24} />, value: '4+', label: t.widgets.stat3Label },
    { icon: <CheckCircle size={24} />, value: '100%', label: t.widgets.stat4Label },
  ];
  return (
    <section id="skills" className="widgets-section">
      <div className="container">
        <h2 className="section-title">{t.widgets.title}</h2>

        {}
        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat-card glass">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {}
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
