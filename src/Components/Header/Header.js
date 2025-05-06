import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router';
const Header = () => {
  const navi=useNavigate();
const navabt=()=>{
  navi('/About');
}
const navabtp=()=>{
  navi('/Portfolio')
}
const Home=()=>{
  navi('/')
}
const Contact=()=>{
  navi('/Contact')
}
  return (
  <>
    <Navbar expand="lg" className="bg-body-secondary mb-3" id="top">
        <Container fluid>
          <Navbar.Brand href="#" id='name'>&lt;Sanjay&gt;</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
             <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              &lt;Sanjay&gt;
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5" id='ones'>
                <li onClick={()=>Home()}>Home</li>
                <br></br>
                <li onClick={()=>navabt()}>About Me</li>
                <br></br>
                <li onClick={()=>navabtp()}>Portfolio</li>
                <br></br>
                <li onClick={()=>Contact()}>Contact</li> 
                <br></br>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  </>
  )
}

export default Header
