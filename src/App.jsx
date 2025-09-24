import styled from "styled-components";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  /* scroll-behavior: smooth; */
  /* overflow-x: auto; */
  scrollbar-width: none;
  color: white;
  /* background: url("./img/bg.jpeg"); */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  scroll-snap-align: start; /* Ensures the section aligns on scroll */
`;

const App = () => {
  return (
    <Container>
      
      <Section id="home">
        <Hero />
      </Section>
    

      <Section id="footer">
        <Footer/>
      </Section>  
 

    </Container>
  );
};

export default App;
    
