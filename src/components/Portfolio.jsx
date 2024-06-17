import React from 'react';
import '../styles/Portfolio.css';
import MathWiz from '../assets/images/MathWiz.png';
import Blog from '../assets/images/Blog.png';
import FirstPortfolio from '../assets/images/FirstPortfolio.png';
import QuizpicableMe from '../assets/images/QuizpicableMe.png';

const Portfolio = () => {
    return (
        <section>
            <h2 class="pTitle">Portfolio</h2>
            <div className="portfolio-grid">
            {/* Repeat the following div block for each application */}
                <div className="portfolio-item">
                <img src={MathWiz} alt="Math-Wiz" />
                <h3>Math-Wiz</h3>
                <p>
                <a href="https://math-wiz.onrender.com/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/lindseymaddox9/Math-Wiz" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                </div>

                <div className="portfolio-item">
                <img src={Blog} alt="Sammi Blog" />
                <h3>Sammi's Blog</h3>
                <p>
                <a href="https://sashuttle.github.io/SammiBlog/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/Sashuttle/SammiBlog" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                </div>

                <div className="portfolio-item">
                <img src={FirstPortfolio} alt="First Portfolio" />
                <h3>My First Portfolio</h3>
                <p>
                <a href="https://sashuttle.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/Sashuttle/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                </div>

                <div className="portfolio-item">
                <img src={QuizpicableMe} alt="Movie Quiz" />
                <h3>Quizpicable Me</h3>
                <p>
                <a href="https://sashuttle.github.io/QuizpicableMe/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/Sashuttle/QuizpicableMe" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
