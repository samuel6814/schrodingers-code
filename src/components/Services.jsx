// src/components/Services.jsx

import React from 'react';
import styled from 'styled-components';

const ServicesSectionContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background-color: #fff;
  color: #000;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden; /* Added to prevent any accidental overflow */
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  /* FIX: Adjusted font size to be responsive without causing overflow */
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  border: 2px solid #000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 1rem 0;
`;

const CardDescription = styled.p`
  color: #555;
  line-height: 1.7;
  margin: 0 0 2rem 0;
  flex-grow: 1;
`;

const CardPrice = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const Services = () => {
  return (
    <ServicesSectionContainer id="services">
      <ContentWrapper>
        <SectionTitle>Services</SectionTitle>
        <ServicesGrid>
          {/* Service 1: Digital Launchpad */}
          <ServiceCard>
            <CardTitle>Digital Launchpad</CardTitle>
            <CardDescription>
              A 5-page, SEO-optimized website with a custom design, mobile responsiveness, contact form, and Google Analytics setup.
            </CardDescription>
            <CardPrice>Starting at $2,500</CardPrice>
          </ServiceCard>

          {/* Service 2: E-commerce Engine */}
          <ServiceCard>
            <CardTitle>E-commerce Engine</CardTitle>
            <CardDescription>
              A full online store for up to 50 products, including payment gateway integration, a product management system, and order tracking.
            </CardDescription>
            <CardPrice>Starting at $6,000</CardPrice>
          </ServiceCard>

          {/* Service 3: SEO & Data */}
          <ServiceCard>
            <CardTitle>SEO & Data Insights</CardTitle>
            <CardDescription>
              Full SEO audits, data-driven content strategy, and performance analytics to boost your search rankings and turn data into actionable insights.
            </CardDescription>
            <CardPrice>Project-based</CardPrice>
          </ServiceCard>
        </ServicesGrid>
      </ContentWrapper>
    </ServicesSectionContainer>
  );
};

export default Services;