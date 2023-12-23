import {
  StyledColoredTitle,
  StyledParagraph,
  StyledSection,
} from "../About/About.styled";
import { StyledList, StyledListItem } from "./Skills.styled";
import { useLanguage } from "../../contexts/LanguageContext";

const Skills = () => {
  const { language } = useLanguage();
  const reverse = language === "ar";
  return (
    <StyledSection
      style={{
        paddingBottom: "0",
        marginBottom: "120px",
      }}
    >
      <StyledColoredTitle
        component="h4"
        sx={{
          margin: "auto",
          padding: "0",
        }}
      >
        Skills
      </StyledColoredTitle>
      <StyledParagraph
        sx={{
          textAlign: "center",
          padding: "5px",
          maxWidth: "592px",
          margin: "auto",
        }}
      >
        Most common methods for designing websites that work well on desktop is
        responsive and adaptive design
      </StyledParagraph>
      <StyledList reverse={reverse}>
        <StyledListItem>Ux Research</StyledListItem>
        <StyledListItem>Information Architecture</StyledListItem>
        <StyledListItem>User Flow</StyledListItem>
        <StyledListItem>Social Media Design</StyledListItem>
        <StyledListItem>Wireframing & Prototyping</StyledListItem>
        <StyledListItem>Landing Pages</StyledListItem>
        <StyledListItem>Responsive Web Design</StyledListItem>
        <StyledListItem>Logo Design</StyledListItem>
      </StyledList>
    </StyledSection>
  );
};

export default Skills;
