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
import {
  Box,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { arabicTheme, englishTheme } from "./theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Page2/Details";
import Consultation from "./components/Page2/Consultation";
import Extras from "./components/Page2/Extras";
import { useLanguage } from "./contexts/LanguageContext";
import content from "./assets/content.json";

function App() {
  const { language } = useLanguage();
  const arabic = language === "ar";

  let pages = [];
  if (language) {
    pages = content[language].services.services;
  }
  return language ? (
    <HashRouter>
      <ThemeProvider theme={arabic ? arabicTheme : englishTheme}>
        <CssBaseline />
        <Box
          sx={{
            "& *": {
              direction: arabic ? "rtl" : "ltr",
              fontFamily: arabic ? "cairo, sans-serif" : "Roboto, sans-serif",
            },
          }}
        >
          <Routes>
            {pages.map((page) => (
              <Route
                key={page.header}
                path={page.path}
                element={
                  <>
                    <Navbar fixed={false} />
                    <Details title={page.header} content={page.content} />
                    <Consultation />
                    <Extras />
                    <Portfolio />
                    <Services />
                    <Testimonials />
                    <Footer />
                  </>
                }
              />
            ))}

            <Route
              index
              element={
                <>
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
                    <div style={{ display: "none", color: "red" }}>
                      <Contact />
                    </div>
                  </main>
                  <Footer />
                </>
              }
            />
            <Route path="*" element={"Not Found"} />
          </Routes>
        </Box>
      </ThemeProvider>
    </HashRouter>
  ) : (
    <Box
      sx={{
        border: "1px solid red",
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <CircularProgress
        variant="indeterminate"
        size={80}
        sx={{
          color: "#0B45B3",
        }}
      />
    </Box>
  );
}

export default App;
