// src/components/Navbar.jsx

import React from 'react';
import styled from 'styled-components';
import { Mail } from 'lucide-react'; // Using a 'Mail' icon for Contact

const NavContainer = styled.nav`
  position: fixed; /* Sits on top of the content */
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 900px; /* Max width to keep it elegant */
  padding: 0.75rem 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(17, 17, 17, 0.5); /* Semi-transparent black */
  border: 1px solid #333;
  border-radius: 999px; /* This creates the pill shape */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;

  @media (max-width: 768px) {
    top: 1rem;
    width: 90%;
  }
`;

const Logo = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; /* Hide text links on mobile */
  }
`;

const StyledLink = styled.a`
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: #e7e7e7;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const CtaButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #333;
  border-radius: 50%;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo href="#">QG</Logo>
      <NavLinks>
        <StyledLink href="#services">Services</StyledLink>
        <StyledLink href="#projects">Projects</StyledLink>
        <StyledLink href="#about">About</StyledLink>
      </NavLinks>
      <CtaButton href="#contact">
        CONTACT
        <IconWrapper>
          <Mail size={16} />
        </IconWrapper>
      </CtaButton>
    </NavContainer>
  );
};

export default Navbar;