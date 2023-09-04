import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPython, faReact} from '@fortawesome/free-brands-svg-icons';
import {faC} from '@fortawesome/free-solid-svg-icons';
import "./Project.css";




const Project = () => {

    useEffect(()=>{
        Aos.init({});
    },[])

    return ( 
        <section id="project" className="project">
            <h1>My Projects</h1>
            <div className="myProjects">
                <div className="React" data-Aos="fade-right" data-Aos-duration="3000">
                    <a href="#" className="rlogo"><FontAwesomeIcon icon={faReact} className="ranima"></FontAwesomeIcon></a>
                    <h3 className="pname">Personal Portfolio</h3>
                    <p className="info">This website utilized React.js to design and implement a modern website layout, showcasing my work and experiences. The website showcase interactivity, including dynamic animations, smooth scrolling, and interactive project galleries.</p>
                </div>
                <div className="Python" data-Aos="fade-right" data-Aos-duration="3000" data-Aos-delay="200">
                    <a href="#"className="plogo"><FontAwesomeIcon icon={faPython} className="panima"></FontAwesomeIcon></a>
                    <h3 className="pname">Hill Cipher Encryption</h3>
                    <p className="info"> A Python program for Hill cipher, using matrix multiplication for data encryption and decryption. This enhanced data security, confidentiality, and integrity, particularly for large datasets.</p>
                </div>
                <div className="C" data-Aos="fade-right" data-Aos-duration="3000" data-Aos-delay="400">
                    <a href="#" className="clogo"><FontAwesomeIcon icon={faC} className="canima"/></a>
                    <h3 className="pname">Food Bank</h3>
                    <p className="info"> A C program that utilizes a linked list data structure. It effectively handles users donation and withdraw requests, allowing for efficient storage, retrieval, and manipulation of data.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Project;