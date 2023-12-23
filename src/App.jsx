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
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Page2/Details";
import Consultation from "./components/Page2/Consultation";
import Extras from "./components/Page2/Extras";
import { useLanguage } from "./contexts/LanguageContext";

function App() {
  const { language } = useLanguage();
  const arabic = language === "ar";
  return (
    language && (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              "& *": {
                // "& p, & span, & h1, & h2, & h3, & h4, & h5, & h6": {
                direction: arabic ? "rtl" : "ltr",
              },
            }}
          >
            <Routes>
              <Route
                path="/ui-design"
                element={
                  <>
                    <Navbar fixed={false} />
                    <Details
                      title={"تصميم شعارات"}
                      content={
                        "الآن يمكنك الوصول إلى قاعدة أكبر من العملاء عن طريق طلب خدمة تصميم مواقع الويب من شركة العالمية الحرة افضل شركة تصميم مواقع الكترونية في الوطن العربي، ساعد نشاطك التجاري على الانتشار بأفضل شكل ممكن من خلال تصميم مواقع ويب مميزة تعكس هويتك التجارية على الويب بصورة مثالية، يمكنك أيضا تصدر نتائج البحث عن طريق اعتمادك علينا في تصميم تصميم مواقع نت احترافية لنشاطك التجاري."
                      }
                    />
                    <Consultation />
                    <Extras />
                    <Portfolio />
                    <Services />
                    <Testimonials />
                    <Footer />
                  </>
                }
              />
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
    )
  );
}

export default App;
