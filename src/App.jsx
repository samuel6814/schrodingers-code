import styled from "styled-components";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";



const Container = styled.div`
  height: 100vh;
  scrollbar-width: none;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  scroll-snap-align: start;
`;

const App = () => {
  return (
    <Container>
     
      <Section id="home">
        <Hero />
      </Section>

      <Section>
      <Projects/>
      </Section>

      <Section>
        <Services/>
      </Section>

      <Section>
        <Testimonials/>
      </Section>

      <Section id="footer">
        <Footer/>
      </Section>  

    </Container>
  );
};

export default App;