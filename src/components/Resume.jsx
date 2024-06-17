import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section>
        <h2 class="resume">Resume</h2>
        <a href="path/to/resume.pdf" id="resume" download>Download Resume</a>
        <h3 class="Proficiencies">Proficiencies</h3>
            <ul class="skills">
                <li id="skills">HTML</li>
                <li id="skills">CSS</li>
                <li id="skills">JavaScript</li>
                <li id="skills">React</li>

                {/* Add more proficiencies as needed */}
            </ul>
        </section>
    );
};

export default Resume;
