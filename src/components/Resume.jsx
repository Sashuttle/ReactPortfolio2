import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section>
        <h2>Resume</h2>
        <a href="path/to/resume.pdf" download>Download Resume</a>
        <h3>Proficiencies</h3>
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
                <li>Proficiency 3</li>
                {/* Add more proficiencies as needed */}
            </ul>
        </section>
    );
};

export default Resume;
