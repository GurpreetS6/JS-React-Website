import React from 'react';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Gurpreet Singh.</span>
                </h1>
                <p className="h-sub-text">
                    I'm an engineering student who's interested in solving
                    complex problems through the use of technology and programming languages.
                    I hope to combine my knowledge of data analysis and programming
                    to build machine learning models and explore front-end technologies!
                </p>
                <div className="icons">
                    <Link to={{ pathname: "https://www.linkedin.com/in/gsingh-98/" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                    </Link>
                    <Link to={{ pathname: "https://github.com/GurpreetS6" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
