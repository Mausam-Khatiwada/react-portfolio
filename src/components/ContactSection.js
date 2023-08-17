import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSectionContainer = styled.section`
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #0b132b;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
       width:80%;

  }
`;

const ContactForm = styled.form`

  flex: 2;
  padding: 20px;
  background-color: #0b132b;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
   @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width:80%;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  margin-right: 15px;
  color: #6e7;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #6e7;
`;

const Text = styled.p`
  font-size: 16px;
  color: #ffff;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  color: #ffff;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6e7;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6e7;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6e7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #485;
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionContainer id="contact">
      <ContactContent>
        <ContactInfo>
          <InfoItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            <div>
              <Title>Address</Title>
              <Text>Gauradaha, Jhapa, Nepal</Text>
            </div>
          </InfoItem>
          <InfoItem>
            <Icon>
              <FaPhone />
            </Icon>
            <div>
              <Title>Phone</Title>
              <Text>+9779824066201</Text>
            </div>
          </InfoItem>
          <InfoItem>
            <Icon>
              <FaEnvelope />
            </Icon>
            <div>
              <Title>Email</Title>
              <Text>mausamkhatiwada98@gmail.com</Text>
            </div>
          </InfoItem>
        </ContactInfo>
        <ContactForm>
          <Title>Contact Me</Title>
          <InputGroup>
            <InputLabel>Name</InputLabel>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <InputLabel>Email</InputLabel>
            <Input type="email" />
          </InputGroup>
          <InputGroup>
            <InputLabel>Message</InputLabel>
            <TextArea rows="5"></TextArea>
          </InputGroup>
          <SubmitButton>Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactSectionContainer>
  );
};

export default ContactSection;
