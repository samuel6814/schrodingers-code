// src/components/Contact.jsx

import React from 'react';
import styled from 'styled-components';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './Navbar';


const ContactSectionContainer = styled.section`
  /* REMOVED width: 100%; to prevent overflow with padding */
  min-height: 100vh;
  padding: 8rem 2rem 4rem 2rem;
  background-color: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden; /* Added as a safeguard */
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: start;
  gap: 1.5rem;
`;

const InfoText = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: #888;
  }
  a, p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin: 0;
    word-break: break-word;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  background-color: #111;
  border: 1px solid #333;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

const TextArea = styled.textarea`
  background-color: #111;
  border: 1px solid #333;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;

const Contact = () => {
  return (
    <ContactSectionContainer>
      <Navbar/>
      <ContentWrapper>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <InfoItem>
              <Mail size={32} color="#888" />
              <InfoText>
                <h3>Email</h3>
                <a href="mailto:hello@quaigraine.dev">hello@quaigraine.dev</a>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <Phone size={32} color="#888" />
              <InfoText>
                <h3>Phone</h3>
                <a href="tel:+233241234567">+233 24 123 4567</a>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <MapPin size={32} color="#888" />
              <InfoText>
                <h3>Location</h3>
                <p>Accra, Ghana</p>
              </InfoText>
            </InfoItem>
          </ContactInfo>
          <ContactForm>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
    </ContactSectionContainer>
  );
};

export default Contact;