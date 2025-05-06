import React from 'react'
import image1 from '../Assest/Images/workflow.jpeg'
import { CgWebsite } from "react-icons/cg";
import { MdReportProblem } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { MdOutlineComputer } from "react-icons/md";
import './Work.css'
import Copy from '../Copy';
const Work = () => {
  const help=[{icon:<CgWebsite />,name:"Full Website Creation"},{icon:<MdReportProblem />,name:"Fixing Problems"},{icon:<DiResponsive />,name:"Responsive Desingns"},{icon:<MdReportProblem />,name:"UI/UX Improvement"},{icon:<MdOutlineComputer />,name:"Design to Code Conversion"}]
  return (
    <>
    <br></br>
    <blockquote>
    <center>
        <p>I live for programming and web development! When it comes to design, there are three reactions: yes, no, and WOW! 🌟 Guess which one I'm chasing? Yep, the WOW! 🚀.
        </p>
    </center>
    </blockquote>
    <div className="line-with-text">
    <p className='what'>What do <span className='help'>I help</span></p>
  </div>
  <div className="helps">
  {
    help.map((current, index) => (
      <div key={index}>
        <h1>{current.icon}</h1>
        <p>{current.name}</p>
      </div>
    ))
  }
</div>
<div className="line-with-text">
    <p className='what'>How <span className='help'>I Work</span></p>
  </div>
  <div className='plan'>
    <center>
     <img src={image1}></img>
    </center>
  </div>
  <div className="line-with-text">
    <p className='what'>Why <span className='help'>Hire Me</span></p>
  </div>
  <div className='why'>
    <center>
    As a passionate and skilled front-end developer, I specialize in creating responsive, user-friendly, and visually appealing web interfaces using React.js, HTML, CSS, and JavaScript. I have hands-on experience in building real-world projects that prioritize user experience, performance, and clean code practices. With a strong eye for design, attention to detail, and a commitment to continuous learning, I am confident in my ability to contribute effectively to any front-end team from day one.
    </center>
  </div>
  <Copy />
    </>
  )
}

export default Work


