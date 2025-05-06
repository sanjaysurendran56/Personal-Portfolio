import React from 'react'
import './About.css'
import { FaDownload } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Skills from '../Skills/Skills';
import Header from '../Header/Header';
const About = () => {
  return (
    <>
    <Header />
    <br></br>
    <div className='abt'>
        <center>
            <h1>ABOUT <span>ME</span></h1>
        </center>
    </div>
    <div className="flexabt">
    <div>
  <center>
    <h3>Information About me</h3>
    <br />
    <p>
      Hey there! I'm Sanjay S, a Frontend Developer. 💻✨
      I thrive on ReactJS, Next.js, JavaScript, API, HTML, CSS, and a sprinkle
      of BootStrap! 💻✨
    </p>
    </center>
    </div>
    <div className='exp'>
        <center>
      <h2><span>1 </span>Month Experience</h2>
      </center>
    </div>
    <div className='exp'>
    <center>
    <h2><span>5+</span>PROJECTS COMPLETED</h2>
    </center>
  </div>
</div>
<center>
    <a href='/SanjayDev564.pdf'><Button variant="success" className="butt">Download Resume <FaDownload /></Button></a>
</center>
<Skills/>
    </>
  )
}

export default About
