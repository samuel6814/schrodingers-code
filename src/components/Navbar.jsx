// src/components/Navbar.jsx

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- KEYFRAME ANIMATIONS ---

const slideDown = keyframes`
  from {
    transform: translate(-50%, -150%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

// --- STYLED COMPONENTS ---

const NavContainer = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  width: 95%;
  max-width: 900px;
  padding: 0.75rem 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(17, 17, 17, 0.5);
  border: 1px solid #333;
  border-radius: 999px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;

  /* Entry Animation */
  transform: translateX(-50%);
  animation: ${slideDown} 0.8s ease-out forwards;

  @media (max-width: 768px) {
    top: 1rem;
    width: 90%;
  }
`;

const Logo = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: #e7e7e7;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  /* Underline Hover Effect */
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: #fff;
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const CtaButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #333;
  border-radius: 50%;
  transition: all 0.3s ease;

  ${CtaButton}:hover & {
    background-color: #fff;
    color: #000;
  }
`;



const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  z-index: 99;
  
  /* Slide-in/out Animation */
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
`;

const MobileStyledLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: #888;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <NavContainer>
        <Logo to="/">QG</Logo>
        <NavLinks>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </NavLinks>
        <CtaButton to="/contact">
          CONTACT
          <IconWrapper>
            <Mail size={16} />
          </IconWrapper>
        </CtaButton>
        <HamburgerButton onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </HamburgerButton>
      </NavContainer>

      {/* The Mobile Menu itself */}
      <MobileNavContainer isOpen={isOpen}>
        <MobileStyledLink to="/services" onClick={toggleMenu}>Services</MobileStyledLink>
        <MobileStyledLink to="/projects" onClick={toggleMenu}>Projects</MobileStyledLink>
        <MobileStyledLink to="/about" onClick={toggleMenu}>About</MobileStyledLink>
        <MobileStyledLink to="/contact" onClick={toggleMenu}>Contact</MobileStyledLink>
      </MobileNavContainer>
    </>
  );
};

export default Navbar;