import React, {useEffect} from "react";
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

const About = () => {

    useEffect(()=>{
        Aos.init();
    },[]);
    return ( 
        <section id="about" className="About">
            <div className="content">
                <h1 data-Aos="fade-up">About Me</h1>
                <p data-Aos="fade-up">
I was born in the United States but spent my childhood in China due to medical reasons. Returning to the States at the age of 9, I am now a student at the University of Central Florida. Proficiency in C, HTML, CSS, JavaScript, and Python fuels my passion for programming. Notably, I excel in courses like Intro to C and Security in Computing. In addition, I have developed a Python-based program for secure data encryption and decryption. Showcasing my creativity and technical skills, I have also designed an appealing personal portfolio website using HTML, CSS, and JavaScript.
Alongside my academic pursuits, I am a skilled academic tutor specializing in STEM and programming subjects. My focus lies in fostering critical thinking and skill development among my students. Beyond the classroom, I actively engage in volunteer work, contributing to community service initiatives. Furthermore, I take pride in implementing cost-saving measures for decorating expenses, demonstrating my resourcefulness and dedication to finding practical solutions.</p>
            </div>
            <div className="education">
            <div className="box" data-Aos="fade-up" data-Aos-duration="2000">
                <div  className="boxcontent">
                <div className="year" data-Aos="fade-up" data-Aos-duration="2000"><FontAwesomeIcon icon={faCalendar}/>  Aug 2018- May 2022</div>
                <div className="degree" data-Aos="fade-up" data-Aos-duration="2000">High School Diploma - Samuel W. Wolfson Highschool</div>
                <div className="about" data-Aos="fade-up" data-Aos-duration="2000">Top 5 of my class, I achieved many accomplishments through the IB program. Sunshine state scholar along with many other recognition from different organizations. Participated in multiple clubs and president of many.</div>
                </div>
            </div>
                <div className="arrow" data-Aos="fade-up" data-Aos-duration="2000">↓</div>
             <div className="box" data-Aos="fade-up" data-Aos-duration="2000">
                <div className="boxcontent">
                <div className="year" data-Aos="fade-up" data-Aos-duration="2000"><FontAwesomeIcon icon={faCalendar}/> Aug 2022-Dec 2022</div>
                <div className="degree" data-Aos="fade-up" data-Aos-duration="2000">B.S. in Computer Science - University of Florida</div>
                <div className="about" data-Aos="fade-up" data-Aos-duration="2000">With this semester I was involved with the Korean American Association along with other clubs such as Machine learning Lab. But decided to transfer to the University of Central Florida for financial reasons.</div>
                </div>
             </div>
                <div className="arrow" data-Aos="fade-up" data-Aos-duration="2000">↓</div>
            <div className="box" data-Aos="fade-up" data-Aos-duration="2000">
                <div className="boxcontent" data-Aos="fade-up" data-Aos-duration="2000">
                <div className="year" data-Aos="fade-up" data-Aos-duration="2000"><FontAwesomeIcon icon={faCalendar}/> Jan 2023- May 2026</div>
                <div className="degree" data-Aos="fade-up" data-Aos-duration="2000">B.S. in Computer Science - University of Central Florida</div>
                <div className="about" data-Aos="fade-up" data-Aos-duration="2000">Here at UCF, I am participating in the DECO community at the Vietnamese American Student Association. While also participate in community service through the TRIO STEM program. </div>
                </div>
            </div>
            </div>
        
        </section>
     );
}
 
export default About;