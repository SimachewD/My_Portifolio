
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './client/components/Footer';
import Navbar from './client/components/Navbar';
import About from "./client/pages/About";
import Contact from "./client/pages/Contact";
import Home from "./client/pages/Home";
import Skills from "./client/pages/Skills";
import AdminDashboard from './admin/pages/Admin';
import Projects from './admin/pages/Projects';
import AdminSkills from './admin/pages/Skills';
import AboutMe from './admin/pages/AboutMe';
import Messages from './admin/pages/Messages';
import NavBar from './admin/components/NavBar';


function App() {

  const path = window.location.pathname;

  return (
  <>  
    
    <BrowserRouter>
    {path !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={
              <div className="flex flex-col md:grid md:grid-cols-4 md:gap-4 bg-slate-50 ">
                <div className="sticky shadow-2xl top-0 md:row-span-2 md:col-span-1"><Navbar /></div>
                <div className="md:ml-4 md:col-span-3">
                  <div><Home /></div>
                  <div><About /></div>
                  <div><Skills /></div>
                  <div><Contact /></div>
                </div>
                <div className="col-span-3"><Footer /></div>
            </div>}  />
         
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/projects' element={<Projects />} />
        <Route path='/admin/skills' element={<AdminSkills />} />
        <Route path='/admin/about' element={<AboutMe />} />
        <Route path='/admin/messages' element={<Messages />} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
