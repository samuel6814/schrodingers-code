// src/components/Hero.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from './Navbar';

// --- KEYFRAME ANIMATIONS ---

// 1. ADDED: A new keyframe for the pulsing "Available" dot
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(52, 211, 153, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// --- STYLED COMPONENTS ---

const HeroSectionContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  padding-top: 8rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem 2rem 2rem;
`;

const MassiveText = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 15vw;
  line-height: 1;
  letter-spacing: -0.05em;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  margin: 0;
`;

const ColorAccent = styled.div`
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translateY(-50%);
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  background: conic-gradient(
    from 90deg at 50% 50%,
    #5d58e8 -12.42deg,
    #b273f6 119.58deg,
    #53c6f0 223.2deg,
    #5d58e8 347.58deg
  );
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  padding-top: 0.5rem;
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
`;

const BottomSection = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Headline = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// --- WIDGET STYLES START HERE ---

const BookingWidget = styled.div`
  background-color: #111;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: #555;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
`;

const PulsingDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #34d399;
  animation: ${pulse} 2s infinite;
`;

const Time = styled.span`
  color: #888;
  font-size: 0.9rem;
`;

const WidgetTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

const WidgetText = styled.p`
  color: #888;
  margin: 0;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const BookButton = styled.a`
  display: block;
  width: 90%;
  padding: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;

// --- WIDGET STYLES END HERE ---

const Hero = () => {
  return (
    <HeroSectionContainer>
      <Navbar />
      <TopSection>
        <MassiveText>
          Quai<ColorAccent />graine
        </MassiveText>
      </TopSection>

      <Divider>
        <span>What I Do</span>
        <span>Let's Talk</span>
      </Divider>
      
      <BottomSection>
        <Headline>
          A design-focused developer taking brands in Accra from zero to one and beyond.
        </Headline>

        <BookingWidget>
          <WidgetHeader>
            <Status>
              <PulsingDot />
              Available
            </Status>
            <Time>15 mins</Time>
          </WidgetHeader>
          <WidgetTitle>Book an intro call</WidgetTitle>
          <WidgetText>
            We'll talk through your project and how we can work together to make it happen.
          </WidgetText>
          <BookButton href="#contact">Book a call →</BookButton>
        </BookingWidget>
      </BottomSection>
    </HeroSectionContainer>
  );
};

export default Hero;