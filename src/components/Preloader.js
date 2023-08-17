import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 2s ease-in-out;
`;

const PreloaderText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  position: relative;
`;

const Spinner = styled.div`
  border: 4px solid rgba(110, 231, 183, 0.3);
  border-top: 4px solid #6E7;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  left: calc(50% - 12px);
`;

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000); 

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PreloaderContainer isVisible={isVisible}>
      <PreloaderText>
      
        &lt;Mausam Khatiwada/&gt;  
          <Spinner />
      
      </PreloaderText>
    </PreloaderContainer>
  );
};

export default Preloader;
