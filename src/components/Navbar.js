import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Import the click sound audio file
import clickSound from '../assets/click.mp3';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 50%;
  right: ${({ isOpen }) => (isOpen ? '0' : '-4rem')};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 100;
  transition: right 0.3s ease;
`;

const NavIcon = styled(Link)`
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  color: white;
  text-decoration: none;
  background-color: ${({ active }) => (active ? '#64B6AC' : 'rgba(0, 0, 0, 0.3)')};
  padding: 0.5rem;
  border-radius: 5px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIcon, setActiveIcon] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'project', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveIcon(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (icon) => {
    const audioElement = document.getElementById('clickAudio');
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }

    setActiveIcon(icon);
  };

  return (
    <NavbarContainer isOpen={isOpen}>
      <audio id="clickAudio" preload="auto">
        <source src={clickSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <NavIcon
        to="home"
        isOpen={isOpen}
        smooth={true}
        duration={1000}
        onClick={() => handleClick('home')}
        active={activeIcon === 'home'}
      >
        <i className="fas fa-home"></i>
      </NavIcon>
      <NavIcon
        to="about"
        isOpen={isOpen}
        smooth={true}
        duration={1000}
        onClick={() => handleClick('about')}
        active={activeIcon === 'about'} // Apply active background color if the icon is active
      >
        <i className="fas fa-info-circle"></i>
      </NavIcon>
      <NavIcon to="skills" isOpen={isOpen} smooth={true}
        duration={1000}
        onClick={() => handleClick('skills')}
        active={activeIcon === 'skills'}>
        <i className="fas fa-cogs"></i>
      </NavIcon>
                  <NavIcon to="project" isOpen={isOpen} smooth={true}
        duration={1000}
        onClick={() => handleClick('project')}
        active={activeIcon === 'project'}>
        <i className="fas fa-lightbulb"></i>
      </NavIcon>
      <NavIcon to="contact" isOpen={isOpen} smooth={true}
        duration={1000}
        onClick={() => handleClick('contact')}
        active={activeIcon === 'contact'}>
        <i className="fas fa-envelope"></i>
      </NavIcon>

    </NavbarContainer>
  );
};

export default Navbar;