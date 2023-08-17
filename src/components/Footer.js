import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0b132b;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;


const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color:#6E7;
  .heart-icon{
    color:red;
  }
`;

const ResponsiveFooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

`;



const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ResponsiveFooterContainer>
     
        </ResponsiveFooterContainer>
        <Copyright>Created with <i className="fas fa-heart heart-icon"></i> By Mausam Khatiwada
</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
