import React from 'react'
import { useNavigate } from 'react-router'

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
      <table className='tabhapc'>
    <td onClick={()=>Home()}>
      Home
    </td>
    <td onClick={()=>About()}>About me</td>
    <td onClick={()=>Pro()}>Portfolio</td>
    <td onClick={()=>Contact()}>Contact</td>
  </table>
    </>
  )
}

export default Copy
