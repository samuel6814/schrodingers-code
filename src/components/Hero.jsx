// src/components/Hero.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react'; // Using ArrowRight for the button

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotateNote = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
  100% { transform: rotate(0deg); }
`;

// --- Styled Components ---
const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top initially */
  background-color: ${({ theme }) => theme.body};
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding-top: 100px; /* Space for the fixed Navbar and top padding */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr; /* Adjust column width as per design */
  gap: 40px;
  width: 100%;
  margin-bottom: 80px; /* Space between top text and sticky notes */

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`;

const LeftBlock = styled.div`
  text-align: left;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Headline = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 4.5rem; 
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the left */
  animation: ${fadeIn} 0.8s ease-out 0.3s forwards;
  opacity: 0;

  @media (max-width: 992px) {
    align-items: center; /* Center on mobile */
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: left; /* Ensure description is left-aligned */

  @media (max-width: 992px) {
    text-align: center;
    max-width: 80%;
  }
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #000; /* Black button as per design */
  color: #fff;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const StickyNotesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow notes to wrap on smaller screens */
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  padding-bottom: 40px; /* Space from bottom of screen */
`;

const StickyNote = styled.div`
  position: relative;
  width: 280px; /* Width of the sticky note */
  height: 320px; /* Height of the sticky note */
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transform: rotate(${props => props.rotate || '0deg'});
  animation: ${rotateNote} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  background-color: ${props => props.color};
  color: white; /* Text color for the notes */
  box-sizing: border-box;
  
  /* Representing the "tapes" */
  &::before, &::after {
    content: '';
    position: absolute;
    height: 12px;
    width: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    top: -6px;
    transform: rotate(5deg);
  }
  &::before { left: 20px; }
  &::after { right: 20px; transform: rotate(-8deg); }

  &:nth-child(2)::before { left: 40px; transform: rotate(-3deg); }
  &:nth-child(2)::after { right: 40px; transform: rotate(10deg); }
  
  &:nth-child(3)::before { left: 10px; transform: rotate(8deg); }
  &:nth-child(3)::after { right: 10px; transform: rotate(-5deg); }


  @media (max-width: 768px) {
    width: 250px;
    height: 280px;
    padding: 20px;
  }
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`;

const NoteProgress = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
  opacity: 0.3;
`;

const NoteStatus = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

const NoteTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: auto; /* Pushes title to bottom */
`;

// Placeholder for the abstract SVG-like drawings inside notes
const NoteIllustration = styled.div`
  flex-grow: 1; /* Allows it to take available space */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Simple placeholder for complex SVG, you can replace with actual SVG later */
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;


// --- Component ---
const Hero = () => {
  return (
    <HeroSection>
      <Navbar />
      
      <ContentWrapper>
        <TopSection>
          <LeftBlock>
            <Headline>Your Digital Workflow, Made Efficient.</Headline>
          </LeftBlock>
          <RightBlock>
            <Description>
              As a Full-Stack Developer, I centralize your web development, SEO, data analysis, and database management processes to deliver seamless, effective, and data-driven solutions.
            </Description>
            <CtaButton href="#services">
              Get started <ArrowRight size={18} />
            </CtaButton>
          </RightBlock>
        </TopSection>

        <StickyNotesContainer>
          <StickyNote color="#A855F7" rotate="-3deg" delay="0s">
            <NoteHeader>
              <NoteStatus>Research</NoteStatus>
              <NoteProgress>1</NoteProgress>
            </NoteHeader>
            <NoteIllustration />
            <NoteTitle>Web Development</NoteTitle>
          </StickyNote>

          <StickyNote color="#FFC107" rotate="2deg" delay="0.5s"> {/* Changed from orange to yellow for contrast */}
            <NoteHeader>
              <NoteStatus>Working on it</NoteStatus>
              <NoteProgress>2</NoteProgress>
            </NoteHeader>
            <NoteIllustration />
            <NoteTitle>SEO & Analytics</NoteTitle>
          </StickyNote>

          <StickyNote color="#F5651D" rotate="-5deg" delay="1s">
            <NoteHeader>
              <NoteStatus>Completed</NoteStatus>
              <NoteProgress>3</NoteProgress>
            </NoteHeader>
            <NoteIllustration />
            <NoteTitle>Database & Systems</NoteTitle>
          </StickyNote>
        </StickyNotesContainer>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;