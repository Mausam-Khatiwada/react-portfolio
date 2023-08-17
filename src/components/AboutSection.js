import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import Myimg from '../assets/Mausam.jpg'; // Adjust the path and filename

const AboutContainer = styled.section`
  padding: 6rem 0;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
margin-left:5rem;
img{
  width: 80%;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}
  @media screen and (max-width: 768px) {
   display:none;
    margin-bottom: 2rem;
    margin-left:0;
  }
`;

const AboutText = styled.div`
margin-right:3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right:0;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color:  #ACDDDE;

`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  margin-left:1rem;
    margin-right:1rem;
  color:white;
    text-align:justify;
  text-justify: inter-word;
`;

const SkillList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;
const Greetings = styled.span`
  font-size: 2rem;
  color: #6E7;
  font-weight:bold;

`;
const Myname = styled.h3`
 color: #6E7;
 margin-top:1px;
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
  <AboutImage>
            <Fade>
          <img src={Myimg} alt="About Me" />
        </Fade>
      </AboutImage>
        <AboutText>
 <AboutDescription>
  <Greetings>Greetings <i className="fas fa-hands-praying"></i></Greetings><br />
  <Fade left>
          I'm Mausam Khatiwada, a web developer who finds joy in crafting digital wonders.
          I find myself continually exploring the fascinating world of technology.
          As a web developer, I use React to whip up captivating user interfaces, Node.js and Express.js to power the magic behind the scenes, and databases like MySQL and MongoDB to handle data with finesse.
   
  Off-screen, I'm a cricket enthusiast, chasing boundaries and dreams alike. And then there's poetry, where I let words dance to the rhythm of emotions.

  In a world of constant learning, I'm always eager to explore new technologies and ideas. Let's collaborate and turn your visions into digital masterpieces.
  <br />
  Best regards,
 <Myname> Mausam Khatiwada</Myname>
       </Fade>
</AboutDescription>
    
        </AboutText>
        
        
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
