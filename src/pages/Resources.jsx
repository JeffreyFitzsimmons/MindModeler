

export default function Resources() {
  // Example resource data
  const resources = [
    {
      icon: '📘',
      title: 'Resource 1',
      description: 'Description for Resource 1. A brief overview of what this resource provides.',
      link: '#'
    },
    {
      icon: '📊',
      title: 'Resource 2',
      description: 'Description for Resource 2. Information related to MRI analysis.',
      link: '#'
    },
    {
      icon: '🧠',
      title: 'Resource 3',
      description: 'Description for Resource 3. Information about the Machine Learning model.',
      link: '#'
    },
    {
      icon: '💻',
      title: 'Resource 4',
      description: 'Description for Resource 4. Tools used for the project development.',
      link: '#'
    },
    {
      icon: '📄',
      title: 'Resource 5',
      description: 'Description for Resource 5. Guides and tutorials for MS research.',
      link: '#'
    },
    {
      icon: '🔬',
      title: 'Resource 6',
      description: 'Description for Resource 6. Insights on MRI scanning technology.',
      link: '#'
    },
    {
      icon: '📝',
      title: 'Resource 7',
      description: 'Description for Resource 7. Documentation for the project’s codebase.',
      link: '#'
    },
    {
      icon: '🌐',
      title: 'Resource 8',
      description: 'Description for Resource 8. Useful links for further reading.',
      link: '#'
    }
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-title">Some Cool Resources</h1>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div className="resource-item" key={index}>
            <div className="resource-icon">{resource.icon}</div>
            <h2 className="resource-title">{resource.title}</h2>
            <p className="resource-description">{resource.description}</p>
            <a className="resource-link" href={resource.link}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
