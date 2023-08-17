import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProjectsSectionContainer = styled.section`
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ProjectsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`

  margin-bottom: 40px;
  margin-left:30px;
  padding: 20px;
  background-color: #0b132b;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
width: 35%;
height:300px;
  @media (max-width: 768px) {
    width: 70%;
      margin-left:0px;
      height:auto;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #6e7;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
      text-align:justify;
  text-justify: inter-word;
  color: #ffff;
  margin-bottom: 20px;
`;

const LiveDemoButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6e7;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #485;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;
const lightOn = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
`;
const LightBulbIcon = styled.i`
  font-size: 36px;
  margin-bottom: 20px;
   color: #ffdd00;
 animation: ${lightOn} 2s infinite;`
 ;
const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer id="project">
      <ProjectsList>
        <ProjectCard>
          <LightBulbIcon className="fas fa-puzzle-piece"></LightBulbIcon>
          <ProjectTitle>Tic Tac Toe</ProjectTitle>
          <ProjectDescription>I've designed and developed an engaging Tic Tac Toe game using HTML, CSS, and JavaScript. This interactive web-based game lets players enjoy the classic X and O showdown. </ProjectDescription>
          <LiveDemoButton href="https://mausam-khatiwada.github.io/Tic-Tac-Toe.github.io/">Live Demo <i className="fas fa-eye"></i></LiveDemoButton>
        </ProjectCard>
        <ProjectCard>
          <LightBulbIcon className="fas fa-sun"></LightBulbIcon>
          <ProjectTitle>Eternal Skies</ProjectTitle>
          <ProjectDescription>Hello! I'm excited to share "Eternal Skies" with you – a weather website I've created. It's all about making weather updates easy and accessible.

 </ProjectDescription>
          <LiveDemoButton href="https://indigo-piglet-wrap.cyclic.app/">Live Demo <i className="fas fa-eye"></i></LiveDemoButton>
        </ProjectCard>
        <ProjectCard>
          <LightBulbIcon className="fas fa-lightbulb"></LightBulbIcon>
          <ProjectTitle>Project Three</ProjectTitle>
          <ProjectDescription>Coming Soon!!!!!!!!!!!!!!!!!</ProjectDescription>
          <LiveDemoButton href="#">Live Demo <i className="fas fa-eye"></i></LiveDemoButton>
        </ProjectCard>
      </ProjectsList>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
