import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { FaLaptopCode, FaServer, FaLinux, FaDatabase as FaSql, FaCode, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit, FaBootstrap, FaSass } from 'react-icons/fa';

const SkillContainer = styled.section`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkillList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
    width:50%;

  flex-wrap: wrap;
  gap: 3rem;
  padding: 0 2rem;
  margin-top: 2rem;
    @media (max-width: 768px) {
    width:100%;
  }
`;
const SkillItem = styled.li`
  text-align: center;
  list-style: none;
`;
const SkillIcon = styled.div`
  font-size: 4rem;
  color: #6E7;
  transition: transform 0.3s ease;

  &:hover {
    animation: rotateIcon 2s infinite linear;
  }

  @keyframes rotateIcon {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const SkillsSection = () => {
  return (
    <SkillContainer id="skills">
      
      <SkillList>
        <SkillItem>
          <SkillIcon>
            <FaLaptopCode />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaLinux />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaCode />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaHtml5 />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaCss3 />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaJs />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaReact />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaNodeJs />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaSql />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaGit />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaBootstrap />
          </SkillIcon>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaSass />
          </SkillIcon>
        </SkillItem>
      </SkillList>
    </SkillContainer>
  );
};

export default SkillsSection;
