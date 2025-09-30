// src/components/About.jsx

import React from 'react';
import styled from 'styled-components';
import { Linkedin, Twitter, Facebook, Instagram, MessageCircle, Download } from 'lucide-react'; // Using MessageCircle for WhatsApp/Snapchat
import Navbar from './Navbar';

const AboutSectionContainer = styled.section`
  width: 100%;
  padding: 8rem 2rem;
  background-color: #fff;
  color: #000;
  font-family: 'Inter', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const BioContainer = styled.div``;

const SectionTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
`;

const LinksContainer = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
  border-radius: 8px;
  justify-content: center;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 3rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #000;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;


const About = () => {
  // IMPORTANT: Replace '#' with your actual links!
  const socialHandles = {
    linkedin: '#',
    whatsapp: '#',
    x: '#',
    facebook: '#',
    instagram: '#',
    snapchat: '#'
  };

  return (
    <AboutSectionContainer id="about">
      <Navbar/>
      <ContentWrapper>
        <BioContainer>
          <SectionTitle>About Me</SectionTitle>
          <BioText>
            Hello! I'm Quaigraine, a design-focused developer based in Accra, Ghana. With over **4 years of programming experience**, I specialize in turning complex problems into beautiful, functional, and user-centric digital experiences. My work is a blend of creative design, robust back-end architecture, and data-driven strategy.
          </BioText>
          <BioText>
            Currently, I'm completing my final year as a **BSc Mathematics student at KNUST**, where my passion for logic and problem-solving fuels my approach to development. I'm driven by the challenge of creating high-performance websites that not only look great but also deliver measurable results.
          </BioText>
        </BioContainer>

        <LinksContainer>
          <CVButton href="/path-to-your-cv.pdf" download>
            <Download size={20} />
            Download CV
          </CVButton>
          <SocialGrid>
            <SocialLink href={socialHandles.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20}/> LinkedIn</SocialLink>
            <SocialLink href={socialHandles.x} target="_blank" rel="noopener noreferrer"><Twitter size={20}/> X</SocialLink>
            <SocialLink href={socialHandles.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20}/> Instagram</SocialLink>
            <SocialLink href={socialHandles.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={20}/> Facebook</SocialLink>
            <SocialLink href={socialHandles.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> WhatsApp</SocialLink>
            <SocialLink href={socialHandles.snapchat} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Snapchat</SocialLink>
          </SocialGrid>
        </LinksContainer>
      </ContentWrapper>
    </AboutSectionContainer>
  );
};

export default About;