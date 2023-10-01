import {
  StyledColoredTitle,
  StyledGraySubTitle,
  StyledSection,
} from "../About/About.styled";

const Portfolio = () => {
  return (
    <StyledSection>
      <StyledColoredTitle margin="auto">Portfolio</StyledColoredTitle>
      <StyledGraySubTitle margin="auto" width="592px" textAlign="center">
        Most common methods for designing websites that work well on desktop is
        responsive and adaptive design
      </StyledGraySubTitle>
    </StyledSection>
  );
};

export default Portfolio;
