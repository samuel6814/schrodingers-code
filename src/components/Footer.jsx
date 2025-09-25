// src/components/Footer.jsx

import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin, Github } from 'lucide-react';

const FooterContainer = styled.footer`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000; /* A simple black background for now */
  color: ${({ theme }) => theme.text};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 25px;
`;

const SocialLink = styled.a`
  color: #fff;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentOrange};
    transform: scale(1.1);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>Let's Build Something Great Together</FooterTitle>
        <SocialLinks>
          <SocialLink href="mailto:your-email@example.com" aria-label="Email">
            <Mail size={24} />
          </SocialLink>
          <SocialLink href="#" aria-label="LinkedIn">
            <Linkedin size={24} />
          </SocialLink>
          <SocialLink href="#" aria-label="GitHub">
            <Github size={24} />
          </SocialLink>
        </SocialLinks>
        <Copyright>© {new Date().getFullYear()} Quaigraine. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;