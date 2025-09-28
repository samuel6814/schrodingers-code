// src/components/Testimonials.jsx

import React from 'react';
import styled from 'styled-components';
import { Quote } from 'lucide-react';

const TestimonialsSectionContainer = styled.section`
  width: 100%;
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
  margin-bottom: 5rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  border: 1px solid #333;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
`;

const QuoteIcon = styled(Quote)`
  position: absolute;
  top: -20px;
  left: 0px;
  width: 120px;
  height: 120px;
  color: #111; /* Dark icon as a background element */
  z-index: 1;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.7;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 2;
`;

const ClientInfo = styled.div`
  position: relative;
  z-index: 2;
`;

const ClientName = styled.p`
  font-weight: 700;
  margin: 0;
`;

const ClientRole = styled.p`
  color: #888;
  margin: 0.25rem 0 0 0;
`;

const Testimonials = () => {
  return (
    <TestimonialsSectionContainer>
      <ContentWrapper>
        <SectionTitle>Trusted By</SectionTitle>
        <TestimonialsGrid>
          {/* Testimonial 1 */}
          <TestimonialCard>
            <QuoteIcon />
            <TestimonialText>
              "Quaigraine delivered a website that exceeded all our expectations. The performance is incredible, and our online sales have increased by 30% since launch. A true professional."
            </TestimonialText>
            <ClientInfo>
              <ClientName>Ama Badu</ClientName>
              <ClientRole>Founder, Accra Eats</ClientRole>
            </ClientInfo>
          </TestimonialCard>

          {/* Testimonial 2 */}
          <TestimonialCard>
            <QuoteIcon />
            <TestimonialText>
              "The SEO and data insights provided were a game-changer for our startup. We went from being invisible on Google to ranking on the first page for our most important keywords in just a few months."
            </TestimonialText>
            <ClientInfo>
              <ClientName>Kofi Mensah</ClientName>
              <ClientRole>CEO, Data Insights Inc.</ClientRole>
            </ClientInfo>
          </TestimonialCard>
        </TestimonialsGrid>
      </ContentWrapper>
    </TestimonialsSectionContainer>
  );
};

export default Testimonials;