import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for a subtle animation on the title
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// A full-page wrapper with a nice gradient background
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: white;
  text-align: center;
  padding: 20px;
`;

// A styled H1 for the title
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

// A styled paragraph for the subtitle
const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s 0.2s ease-out forwards;
`;

// A styled button with hover effects
const StyledButton = styled.button`
  background-color: #ffffff;
  color: #6e8efb;
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    background-color: #f0f4ff;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

// The main App component
export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <AppWrapper>
      <Title>Hello, Styled-Components! 🎉</Title>
      <Subtitle>If you can see this, your installation is working correctly.</Subtitle>
      <StyledButton onClick={() => setClicks(clicks + 1)}>
        You've clicked me {clicks} {clicks === 1 ? 'time' : 'times'}
      </StyledButton>
    </AppWrapper>
  );
}
