import React from 'react';
import styled from 'styled-components';
import { Briefcase } from 'lucide-react';

const NavWrapper = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const NavPill = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 15px;
  /* UPDATED: Now using theme variables */
  background: ${({ theme }) => theme.navBackground};
  border: 1px solid ${({ theme }) => theme.navBorder};
  border-radius: 999px;
  box-shadow: ${({ theme }) => theme.navShadow};
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  /* UPDATED: Now using theme variables */
  background-color: ${({ theme }) => theme.logoBg};
  color: ${({ theme }) => theme.logoText};
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  /* UPDATED: Now using theme variables */
  color: ${({ theme, active }) => (active ? theme.text : theme.textSecondary)};
  font-weight: ${({ active }) => (active ? '600' : '500')};
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 999px;
  transition: all 0.2s ease-in-out;
  background-color: ${({ active, theme }) => (active ? theme.linkHoverBg : 'transparent')};

  &:hover {
    background-color: ${({ theme }) => theme.linkHoverBg};
    color: ${({ theme }) => theme.text};
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <NavPill>
        <Logo href="#">
          <Briefcase size={20} />
        </Logo>
        <NavLinks>
          <StyledLink href="#" active>Works</StyledLink>
          <StyledLink href="#">Benefits</StyledLink>
          <StyledLink href="#">About</StyledLink>
          <StyledLink href="#">Process</StyledLink>
          <StyledLink href="#">Pricing</StyledLink>
          <StyledLink href="#">FAQ</StyledLink>
        </NavLinks>
      </NavPill>
    </NavWrapper>
  );
};

export default Navbar;