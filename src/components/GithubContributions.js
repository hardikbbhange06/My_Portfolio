import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubContributions = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/your-username/repos');
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section id="github-contributions" className="section">
    <div  className="animate-charcter1">

    <h2>GitHub Contributions</h2>
    </div>
    
      {repositories.map((repo) => (
        <div key={repo.id} className="github-repo-card">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </section>
  );
};

export default GitHubContributions;
