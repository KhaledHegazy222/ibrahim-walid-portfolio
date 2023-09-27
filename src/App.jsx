import "./global.css";
import { StyledHeader } from "./App.styled";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Numbers from "./components/Numbers";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledHeader>
          <Navbar />
          <Hero />
        </StyledHeader>
        <main>
          <About />
          <Services />
          <Numbers />
          <Skills />
          <Tools />
          <Portfolio />
          <Clients />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
