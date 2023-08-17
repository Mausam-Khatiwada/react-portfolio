import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profile.jpg';
import { CSSTransition } from 'react-transition-group';
import Typist from 'react-typist';
import { Link } from 'react-scroll';
import { Fade } from 'react-reveal';


const HeroContainer = styled.section`
  position: relative;
  color: #fff;
  text-align: center;
  padding: 10rem 0;
 overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 6rem 0;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(10px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 500ms, transform 500ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 500ms, transform 500ms;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;

  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HighlightedText = styled.span`
  color: #6E7; // Change color to your desired highlight color
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 5%;
  margin: 1rem auto;
  display: block;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`;

const CreativeLine = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.8;
  margin-top: 1rem;
`;
const SocialLinks = styled.div`
  margin-top: 1.5rem;
`;
const ResponsiveSocialLinks = styled(SocialLinks)`
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ACDDDE;
  }
`;



const HeroSection = () => {
  const texts = ['Mausam Khatiwada', 'A Web Developer'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:mausamkhatiwada98@gmail.com';
}

  return (
    <HeroContainer id="home">
     <Fade left>
      <HeroTitle>

        Hi, I'm{' '}<br />

        <HighlightedText>
          <CSSTransition
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <Typist
              key={texts[currentIndex]}
              avgTypingDelay={100}
              cursor={{ hideWhenDone: true }}
            >
              {texts[currentIndex]}

            </Typist>

          </CSSTransition>
        </HighlightedText>
      </HeroTitle>
   </Fade>
      <Fade left>
      <HeroDescription>
        A Web Developer and Tech Enthusiast<br />passionate about crafting digital experiences.
      </HeroDescription>
       </Fade>
            <Fade right>
      <ProfileImage src={profileImage} alt="Profile" />
           </Fade>
             <Fade left>
      <CreativeLine>
        Turning code into elegant solutions<br />and ideas into reality.
      </CreativeLine>
      <ResponsiveSocialLinks>
            <SocialLink href="https://www.linkedin.com/in/mausam-khatiwada/">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
           <SocialLink href="#" onClick={handleEmailClick}>
              <i className="fas fa-envelope"></i>
            </SocialLink>
            <SocialLink href="https://www.whatsapp.com/">
              <i className="fab fa-whatsapp"></i>
            </SocialLink>
            <SocialLink href="https://www.facebook.com/profile.php?id=100085865900867">
              <i className="fab fa-facebook"></i>
            </SocialLink>
          </ResponsiveSocialLinks>
          </Fade>
    </HeroContainer>
  );
};

export default HeroSection;
