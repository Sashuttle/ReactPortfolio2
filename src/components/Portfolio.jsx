import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
            {/* Repeat the following div block for each application */}
                <div className="portfolio-item">
                <img src="path/to/image.jpg" alt="Project Title" />
                <h3>Project Title</h3>
                <p>
                <a href="deployed-app-link" target="_blank" rel="noopener noreferrer">Live</a> | <a href="github-repo-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
