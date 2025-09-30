// src/components/Projects.jsx

import React from 'react';
// 1. Import 'createGlobalStyle'
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar';

// 2. Define the GlobalStyle component here
const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
`;

// --- STYLED COMPONENTS ---

const ProjectsSectionContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #888;
  max-width: 600px;
  margin: 0 auto 5rem auto;
  line-height: 1.7;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  padding: 3rem 0;
  border-bottom: 1px solid #333;
  align-items: center;
  &:first-child {
    border-top: 1px solid #333;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
`;

const ProjectInfo = styled.div``;

const ProjectTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectTags = styled.p`
  color: #888;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const ProjectDescription = styled.p`
  color: #fff;
  line-height: 1.7;
  margin: 0;
`;

const ViewCaseStudyButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  justify-self: end;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const Projects = () => {
  return (
    // 3. Add the GlobalStyle component here to apply the styles
    <>
      <GlobalStyle />
      <ProjectsSectionContainer id="projects">
        <Navbar/>
        <ContentWrapper>
          <SectionTitle>Case Studies</SectionTitle>
          <SectionSubtitle>
            A selection of projects where I transformed complex challenges into elegant, high-performance digital solutions.
          </SectionSubtitle>
          <ProjectList>
            {/* --- PROJECT 1 --- */}
            <ProjectItem>
              <ProjectInfo>
                <ProjectTitle>Accra Eats</ProjectTitle>
                <ProjectTags>Web Development / E-commerce</ProjectTags>
              </ProjectInfo>
              <ProjectDescription>
                A local bakery had no online presence and was losing customers. I built a fast, mobile-first website with an online ordering system, resulting in a 20% revenue increase from online orders.
              </ProjectDescription>
              <ViewCaseStudyButton href="#">View Case Study</ViewCaseStudyButton>
            </ProjectItem>
            {/* --- PROJECT 2 --- */}
            <ProjectItem>
              <ProjectInfo>
                <ProjectTitle>Data Insights Inc.</ProjectTitle>
                <ProjectTags>Data Analytics / SEO</ProjectTags>
              </ProjectInfo>
              <ProjectDescription>
                A tech startup was struggling with poor search rankings. I performed a full SEO audit and implemented a data-driven content strategy, leading them to rank #1 on Google for their target keywords.
              </ProjectDescription>
              <ViewCaseStudyButton href="#">View Case Study</ViewCaseStudyButton>
            </ProjectItem>
          </ProjectList>
        </ContentWrapper>
      </ProjectsSectionContainer>
    </>
  );
};

export default Projects;