import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Homeee';
import Layout from './components/Layout/start';
import { useState } from 'react';
import {AiOutlineBars} from "react-icons/ai";
import Homeee from './components/Home/Homeee';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Skill from './components/Skill/skill'
import Projects from './components/Projects/projects'
import Sidebar from './components/Sidebar/Sbar';

function App() {
  const [openSidebar, setopenSidebar] = useState(false);
  return (
    <>
      <div className='PPA'>
          <div className='nav-head'>
            <AiOutlineBars className='side-hide' onClick={() => setopenSidebar((Prev) => !Prev )}/>
            
          </div>
          <Homeee open ={openSidebar} onClose ={() => setopenSidebar(false)}/>

      </div>
      <Routes basename="/Oms-portfolio"> 
      <Route path="/" element={<Sidebar />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/skill" element={<Skill/>}/>
      <Route path="/projects" element={<Projects/>}/>

      </Routes>
      
    </>
  );
}

export default App;
