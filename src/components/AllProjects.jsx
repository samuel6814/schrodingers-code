// src/components/AllProjects.jsx

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { X, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

// --- DATA FOR YOUR PROJECTS ---
// Add all your projects to this array. I've created three detailed placeholders.
const projectsData = [
  {
    id: 1,
    title: 'Accra Eats - E-commerce Platform',
    category: 'Web Development / E-commerce',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Accra+Eats',
    summary: 'A mobile-first website and online ordering system for a local artisan bakery, driving a significant increase in online revenue.',
    problem: 'Accra Eats, a popular local bakery, had a strong offline presence but no way to capture the growing online market. They were losing potential customers to competitors with digital storefronts and needed a way to showcase their products and handle online orders efficiently.',
    solution: 'I built a fast, responsive, and SEO-optimized e-commerce website using React and Firebase. The solution featured a dynamic product gallery, a secure online payment gateway, and a simple inventory management system for the bakery staff. The design was clean, focusing on high-quality product imagery to entice customers.',
    result: 'Within three months of launch, online orders accounted for over 20% of their total revenue. The website achieved a #1 Google ranking for "artisan bread Accra," dramatically increasing their online visibility and customer base.',
    tech: ['React', 'Firebase', 'Styled-Components', 'Stripe API']
  },
  {
    id: 2,
    title: 'Data Insights Inc. - SEO Overhaul',
    category: 'Data Analytics / SEO',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Data+Insights',
    summary: 'A comprehensive SEO audit and data-driven content strategy that propelled a tech startup to the first page of Google.',
    problem: 'Data Insights Inc., a B2B tech startup, had a powerful product but was virtually invisible online. Their website suffered from poor search engine rankings for critical keywords, resulting in low organic traffic and minimal lead generation.',
    solution: 'I conducted a deep technical SEO audit to identify and fix on-page issues. Following this, I performed keyword research and developed a data-driven content strategy targeting high-intent search queries. This involved creating blog posts, case studies, and landing pages optimized for both users and search engines.',
    result: 'Organic traffic increased by over 300% in six months. The company secured first-page Google rankings for their top 5 target keywords, leading to a 75% increase in qualified marketing leads generated from their website.',
    tech: ['SEO', 'Google Analytics', 'Content Strategy', 'Data Analysis']
  },
  {
    id: 3,
    title: 'Project Phoenix - Internal Dashboard',
    category: 'Full-Stack Development',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Project+Phoenix',
    summary: 'A custom internal dashboard for a logistics company to track and manage their fleet in real-time.',
    problem: 'A mid-sized logistics company was using outdated spreadsheets to manage their fleet of over 50 vehicles. This led to inefficient routing, delayed communication, and a lack of real-time data for decision-making.',
    solution: 'I developed a full-stack web application with a React front-end and a Node.js/Express back-end. The dashboard provides a real-time map view of all vehicles, automated route optimization, and a reporting system for fuel consumption and delivery times. The UI was designed to be intuitive for non-technical staff.',
    result: 'The new dashboard reduced fuel costs by 15% through optimized routing. It also improved on-time delivery rates to 98% and provided management with the real-time data needed to improve operational efficiency across the board.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Leaflet.js']
  }
];

// --- KEYFRAME ANIMATIONS ---
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const scaleUp = keyframes`from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; }`;

// --- STYLED COMPONENTS ---

const MuseumContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 2rem 4rem 2rem;
  background-color: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 5rem;
`;

const MuseumTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const MuseumSubtitle = styled.p`
  font-size: 1.1rem;
  color: #888;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #111;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
`;

const CardCategory = styled.p`
  color: #888;
  margin: 0;
`;

// --- MODAL / CASE STUDY STYLES ---

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  background-color: #111;
  border: 1px solid #333;
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 3rem;
  position: relative;
  animation: ${scaleUp} 0.4s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover { color: #fff; }
`;

const CaseStudyTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
`;

const SectionHeader = styled.h3`
  font-family: 'Anton', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #888;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
  margin: 2rem 0 1rem 0;
`;

const CaseStudyText = styled.p`
  line-height: 1.8;
  color: #ccc;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechTag = styled.span`
  background-color: #222;
  color: #ccc;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
`;


const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <MuseumContainer>
        <Navbar/>
        <Header>
          <MuseumTitle>The Digital Museum</MuseumTitle>
          <MuseumSubtitle>
            A curated collection of projects and case studies. Each exhibit represents a unique problem solved through code, creativity, and data-driven strategy.
          </MuseumSubtitle>
        </Header>
        <ProjectGrid>
          {projectsData.map(project => (
            <ProjectCard key={project.id} onClick={() => setSelectedProject(project)}>
              <CardImage src={project.imageUrl} alt={project.title} />
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardCategory>{project.category}</CardCategory>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </MuseumContainer>

      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedProject(null)}><X size={28} /></CloseButton>
            <CaseStudyTitle>{selectedProject.title}</CaseStudyTitle>
            
            <SectionHeader>The Problem</SectionHeader>
            <CaseStudyText>{selectedProject.problem}</CaseStudyText>
            
            <SectionHeader>My Solution</SectionHeader>
            <CaseStudyText>{selectedProject.solution}</CaseStudyText>
            
            <SectionHeader>The Result</SectionHeader>
            <CaseStudyText>{selectedProject.result}</CaseStudyText>
            
            <SectionHeader>Technology Stack</SectionHeader>
            <TechList>
              {selectedProject.tech.map(tech => <TechTag key={tech}>{tech}</TechTag>)}
            </TechList>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default AllProjects;