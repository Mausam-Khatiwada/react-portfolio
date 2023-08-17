import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopNavbar from '../components/TopNavbar'; 
import ProjectSection from '../components/ProjectSection'; 
const Home = () => {
  return (
    <div>
      <TopNavbar /> {/* Add the TopNavbar component */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />

      <Footer />
      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default Home;
