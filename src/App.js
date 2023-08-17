import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Preloader from './components/Preloader'; // Adjust the path as needed

const BlueLine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ lineWidth }) => lineWidth}%;
  height: 3px;
  background-color: #6E7;
  z-index: 9999;
`;

const App = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrolled / maxScroll) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoadingContent(false);
    }, 2000); // Adjust the time as needed

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {isLoadingContent ? <Preloader /> : <BlueLine lineWidth={scrollPercentage} />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
