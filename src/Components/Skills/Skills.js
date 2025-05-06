import React from 'react'
import './Skills.css'
import image1 from '../Assest/Images/html.jpg'
import image2 from '../Assest/Images/css1.svg'
import image3 from '../Assest/Images/js.webp'
import image4 from '../Assest/Images/boot.png'
import image5 from '../Assest/Images/react.png'
import image6 from '../Assest/Images/sql.png'
import { FaGraduationCap } from "react-icons/fa";
import Copy from '../Copy'
const Skills = () => {
    const images = [
        { srce: image1},
        { srce: image2,},
        { srce: image3,},
        { srce: image4,},
        { srce: image5,},
        { srce: image6,},
      ];
  return (
    <>
    <br></br>
    <br></br>
    <center className='skill'>
        <h1>MY <span>SKILLS</span></h1>
    
    <p>These are some technologies I've worked with
    </p>
    </center> 
    <div className='flexcontainerforpop'>
  {images.map((item) => (
    <div>
     <img src={item.srce}></img>
   </div>
  ))}
 </div>
 <br></br>
 <center className='skill'>
        <h1><span>EDUCATION</span></h1>
    </center>
    <div className='flexedu'>
        <div className='exp'> 
            <center>
                <h4><FaGraduationCap /></h4>
                <h4>BACHELOR OF ENGINEERING(2021-2025)</h4>
                <p>K. Ramakrishnan College of Engineering</p>
                <p>Electronics & Communication Engineering</p>
                <h3>CGPA–8.24</h3>
            </center>
        </div>
        <div className='exp'> 
            <center>
                <h4><FaGraduationCap /></h4>
                <h4>SECONDARY SCHOOL (2019)</h4>
                <p>Sir Sivaswamy Balavidhyalaya Matric., Hr., Sec., School.</p>
                <h3>Percentage – 82.4%</h3>
            </center>
        </div>
        <div className='exp'> 
            <center>
                <h4><FaGraduationCap /></h4>
                <h4>HIGHER SECONDARY SCHOOL (2021)</h4>
                <p>Sir Sivaswamy Balavidhyalaya Matric., Hr., Sec., School.
                </p>
                <h3>Percentage – 88.3%</h3>
            </center>
        </div>
    </div>
    <Copy/>

    </>
  )
}

export default Skills
