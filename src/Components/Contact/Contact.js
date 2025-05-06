import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Header from '../Header/Header';
import './Contact.css'
import Button from 'react-bootstrap/Button';
import { FaTelegramPlane } from "react-icons/fa";
import Copy from '../Copy';
const Contact = () => {
  return (
    <>
    <Header />
    <center className='skill'>
      <h1>Contact</h1>
      <p>Get in touch with me via social media or send me an email.</p>
      <img src=""></img>
      </center>
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
        </div>
        <div className='main'>
              <input className='name' placeholder='Your name'></input>
              <input className='email' placeholder=' Your Mail'></input>
              <input className='sub' placeholder='Leave your message here!'></input>
              <Button className="butto" variant="primary"><FaTelegramPlane /></Button>
            </div>
            <Copy />
    </>
  )
}

export default Contact
