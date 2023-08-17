import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import musicIcon from '../assets/music-icon.png';
import music from '../assets/music.mp3';
import musicGif from '../assets/music.gif';
import logo from '../assets/logo.png';


const TopNavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`;
const MusicGifContainer = styled.div`

.MusicGif{
     width:100px;
  height:50px;
}

  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
  display: flex;
  align-items: center; 
  justify-content: center; 

`;

const Logo = styled.img`
  width: 70px;
  height: 40px;
`;

const MusicLogo = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const NavIcon = styled.div`
  font-size:25px;
  width:100px;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #A7D9C9;
  text-decoration: none;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;



const TopNavbar = ({ toggleTheme }) => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);

  useEffect(() => {
    const musicElement = document.getElementById('music');
    if (musicPlaying) {
      musicElement.play();
    } else {
      musicElement.pause();
    }
  }, [musicPlaying]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <TopNavbarContainer>
      <Logo src={logo} alt="Logo" />
      {musicPlaying ? (
        <MusicGifContainer>
          <img className="MusicGif" src={musicGif} alt="Music Gif" onClick={toggleMusic} />
        </MusicGifContainer>
      ) : (
        <MusicGifContainer
          onClick={toggleMusic}
          style={{ transform: `rotate(${iconRotation}deg)` }}
        >
             <NavIcon
    
      >
        <i className="fas fa-music"></i>
      </NavIcon>


        </MusicGifContainer>
      )}
    
      <audio id="music" loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </TopNavbarContainer>
  );
};

export default TopNavbar;
