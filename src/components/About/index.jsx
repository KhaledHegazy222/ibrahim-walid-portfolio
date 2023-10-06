import { Box, Grid } from "@mui/material";
import aboutImage from "../../assets/about.svg";
import { StyledFilledLink } from "../Navbar/Navbar.styled";
import {
  StyledColoredTitle,
  StyledContent,
  StyledParagraph,
  StyledSection,
  StyledTitle,
} from "./About.styled";

const About = () => {
  return (
    <StyledSection>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          "& > *": {
            flex: "1",
          },
        }}
      >
        <Grid container>
          <Grid item xs={10}>
            <img src={aboutImage} />
          </Grid>
        </Grid>
        <StyledContent>
          <StyledColoredTitle
            style={{
              fontSize: "24px",
              padding: "0",
              marginBottom: "40px",
            }}
          >
            I&apos;m a Designer
          </StyledColoredTitle>
          <StyledTitle>I can design anything</StyledTitle>
          <StyledTitle>you want</StyledTitle>
          <StyledParagraph
            style={{
              margin: "40px 0",
            }}
          >
            Hello there! I&apos;m a web designer, and I&apos;m very passionate
            and dedicated to my work. With 20 years experience as a professional
            web developer, I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </StyledParagraph>

          <StyledFilledLink
            href="#"
            style={{
              marginLeft: "0",
              fontSize: "18px",
            }}
          >
            Get a free consultation now
          </StyledFilledLink>
        </StyledContent>
      </Box>
    </StyledSection>
  );
};

export default About;
