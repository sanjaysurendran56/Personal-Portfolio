import './App.css';
import Header from './Components/Header/Header';
import NameHead from './Components/NameHead/NameHead';
import Work from './Components/Work/Work';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import Home from './Components/Home';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Portfolio' element={<Project />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
