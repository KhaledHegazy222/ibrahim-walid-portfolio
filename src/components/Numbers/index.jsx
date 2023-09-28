import { StyledSection } from "../About/About.styled";
import {
  StyledContent,
  StyledGridContainer,
  StyledSummaryElement,
  StyledTitle,
} from "./Numbers.styled";

const Numbers = () => {
  return (
    <StyledSection
      style={{
        background:
          "linear-gradient(54.59deg, #00387A 5.04%, #001227 62.83%, #001227 62.83%)",
        color: "white",
        width: "100%",
        margin: "50px 0",
      }}
    >
      <StyledGridContainer container>
        <StyledSummaryElement item>
          <StyledTitle component="h4">+3</StyledTitle>
          <StyledContent component="p">Years Experience</StyledContent>
        </StyledSummaryElement>
        <StyledSummaryElement item>
          <StyledTitle component="h4">+15</StyledTitle>
          <StyledContent component="p">Projects Done</StyledContent>
        </StyledSummaryElement>
        <StyledSummaryElement item>
          <StyledTitle component="h4">+150</StyledTitle>
          <StyledContent component="p">Happy Clients</StyledContent>
        </StyledSummaryElement>
        <StyledSummaryElement item>
          <StyledTitle component="h4">+240</StyledTitle>
          <StyledContent component="p">Good Reviews</StyledContent>
        </StyledSummaryElement>
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Numbers;
