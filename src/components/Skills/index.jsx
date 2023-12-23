import {
  StyledColoredTitle,
  StyledParagraph,
  StyledSection,
} from "../About/About.styled";
import { StyledList, StyledListItem } from "./Skills.styled";
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../assets/content.json";
const Skills = () => {
  const { language } = useLanguage();
  const content = contentData[language].skills;

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
        {content.title}
      </StyledColoredTitle>
      <StyledParagraph
        sx={{
          textAlign: "center",
          padding: "5px",
          maxWidth: "592px",
          margin: "auto",
        }}
      >
        {content.description}
      </StyledParagraph>
      <StyledList>
        {content.skills.map((skill) => (
          <StyledListItem key={skill}>{skill}</StyledListItem>
        ))}
      </StyledList>
    </StyledSection>
  );
};

export default Skills;
