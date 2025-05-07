import React from 'react'
import { useNavigate } from 'react-router'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Copy = () => {
  const navi=useNavigate();
  const Home=()=>{
    navi('/')
  }
const About=()=>{
  navi('/About')
}
const Pro=()=>{
  navi('/Portfolio')
}
const Contact=()=>{
  navi('/Contact')
}
  return (
    <>
      <hr>
  </hr>
 <table>
   
   <td>
      Sanjay2025--Build with React-Js
      </td>
      </table>
     <Container>
      <Row className="Cont">
        <Col onClick={()=>Home()}> Home</Col>
        <Col onClick={()=>About()}>About me</Col>
      </Row>
   <Row>
        <Col onClick={()=>Pro()}>Portfolio</Col>
        <Col  onClick={()=>Contact()}>Contact</Col>
      </Row>
    </Container>
    </>
  )
}

export default Copy
