import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

//FIXME: ADD LINKS TO PROFILES
const Footer = () => {
    return (
        <footer>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://stackoverflow.com/users/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        </footer>
    );
};

export default Footer;
