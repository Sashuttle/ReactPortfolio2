import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
        <a href="https://github.com/Sashuttle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://www.linkedin.com/in/samantha-shuttleworth-9a28b12bb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://stackoverflow.com/users/25595097/sammi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        </footer>
    );
};

export default Footer;
