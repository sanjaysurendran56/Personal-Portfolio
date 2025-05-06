import React from 'react'
import './NameHead.css'
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const NameHead = () => {
  return (
    <>
    <div className="container">
  <div className="sanjay1">
    
      <div className='name'>
    <h1>Hi,I'm👋</h1>
    <h1><span>&lt;Sanjay&gt;</span></h1>
    </div>
  </div>
  <div className="sanjay2">
    <div className='name2'>
    <h1><span>&lt;Front-end Developer&gt;</span></h1>
    </div>
  </div>
 </div>
 <br></br>
 <div className='iconcont'>
 <div>
  <a href='https://www.linkedin.com/in/sanjay-s-gas5/'><h1><FaLinkedin /></h1></a>
  </div>
  <div>
  <a href='mailto:sanjaysuren564@mail.com'><h1><IoMdMail /></h1></a>
  </div>
  <div>
  <a href='https://github.com/sanjaysurendran56'><h1><FaGithub /></h1></a>
  </div>
  <div>
  <h1><FaTelegramPlane /></h1>
  </div>
 </div>
    </>
  )
}

 
export default NameHead;
