import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <div>
        <header className="header">
        <a className="logo" href="#">University of Central Florida</a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="home-content">
          <h1>Hi, I am Jefferson Li</h1>
          <h3>A second-year Computer Science Student at UCF</h3>
          <br />
          <p>
            With my fluency in multiple languages and my passion for traveling, I have always aspired to pursue a career in software engineering. I believe that my strong communication skills and unwavering determination make me an ideal candidate for internship positions.
          </p>
          <div className="btn-box">
            <a href="#">My Resume</a>
            <a href="#">Contact Me</a>
          </div>
        </div>

        <div className="home-icons">
          <a href="https://github.com/lijefferson027" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/jeffersonli027/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
        </div>
    </section>
 </div>
  );
}

export default Home;
