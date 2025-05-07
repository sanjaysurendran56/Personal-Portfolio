import React from 'react'
import Header from '../Header/Header'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image1 from '../Assest/Images/pro4.png'
import image2 from '../Assest/Images/prject1.png'
import image3 from '../Assest/Images/pro3.png'
import image4 from '../Assest/Images/project2.png'
import './Project.css'
import Copy from '../Copy';
const Project = () => {
     const images = [
        { srce: image2,name:"Explore Tamilnadu",para:"A tourism website that allows users to explore famous places in Tamil Nadu, view details, and plan their visit. The site includes images, brief descriptions, and location info",Tech:"React-Js,Bootstrap,ContextAPI,ReactRouter",link:'https://github.com/sanjaysurendran56/Explore-Tamilnadu'},
        { srce: image1,name:"Form-validation",para:"Developed a user-friendly login and registration form that includes robust front-end validations to enhance security and user experience. The form ensures that users enter a valid email, strong password, and matching confirm password before allowing submission.",Tech:"React-Js,Hooks",link:"https://github.com/sanjaysurendran56/LoginFormvlidation"},    
        { srce: image4,name:"EDUTRACK-Student Management System",para:"Developed EduTrack - a Student Information System using the MERN stack (MongoDB, Express, React.js,Node.js).Implemented features for adding, editing, and deleting student records. Optimized user interface for efficient data handling and seamless interaction.",Tech:"Express JS,NodeJs,React-JS,MongoDB",link:"https://github.com/sanjaysurendran56/Edutrack"},
        { srce: image3,name:"Personal Portfolio",para:"Designed and developed a personal portfolio website to showcase my skills, projects, and resume. The site highlights my work as a developer and acts as a central hub for potential employers or collaborators to learn more about me.",Tech:"React-Js",link:"https://github.com/sanjaysurendran56/Personal-Portfolio"},
    
    ];
  return (
    <>
    <Header />
    <br></br>
    <br></br>
    <center className='skill'>
        <h1>MY <span>PROJECTS</span></h1>
      </center>
      
      <div className="project-container">
  {images.map((item, index) => (
    <div key={index} className="project-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.srce} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.para}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{item.Tech}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={item.link}>Git Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
<Copy />
 
    </>
  )
}

export default Project
