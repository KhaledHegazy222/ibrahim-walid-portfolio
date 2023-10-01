import {
  StyledColoredTitle,
  StyledParagraph,
  StyledSection,
} from "../About/About.styled";
import { StyledList, StyledListItem } from "./Skills.styled";

const Skills = () => {
  return (
    <StyledSection>
      <StyledColoredTitle
        component="h4"
        style={{
          margin: "auto",
          padding: "0",
        }}
      >
        Skills
      </StyledColoredTitle>
      <StyledParagraph
        style={{
          textAlign: "center",
          padding: "5px",
          width: "592px",
          margin: "auto",
        }}
      >
        Most common methods for designing websites that work well on desktop is
        responsive and adaptive design
      </StyledParagraph>
      <StyledList>
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
