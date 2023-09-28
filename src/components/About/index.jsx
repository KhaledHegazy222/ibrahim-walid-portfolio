import aboutImage from "../../assets/about.svg";
import { StyledFilledLink } from "../Navbar/Navbar.styled";
import {
  StyledColoredSubTitle,
  StyledContent,
  StyledParagraph,
  StyledSection,
  StyledTitle,
} from "./About.styled";

const About = () => {
  return (
    <StyledSection>
      <img src={aboutImage} />
      <StyledContent>
        <StyledColoredSubTitle>I&apos;m a Designer</StyledColoredSubTitle>
        <StyledTitle>I can design anything you want</StyledTitle>
        <StyledParagraph>
          Hello there! I&apos;m a web designer, and I&apos;m very passionate and
          dedicated to my work. With 20 years experience as a professional web
          developer, I have acquired the skills and knowledge necessary to make
          your project a success. I enjoy every step of the design process, from
          discussion and collaboration.
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
    </StyledSection>
  );
};

export default About;
