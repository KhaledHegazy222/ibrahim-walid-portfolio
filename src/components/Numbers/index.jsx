import { useEffect, useState } from "react";
import { StyledSection } from "../About/About.styled";
import {
  StyledContent,
  StyledGridContainer,
  StyledSummaryElement,
  StyledTitle,
} from "./Numbers.styled";

let intervalId;

const MaxExpYears = 3;
const MaxProjects = 15;
const MaxClients = 150;
const MaxReviews = 240;

const Numbers = () => {
  const [percentage, setPercentage] = useState(0);
  const initTimer = () => {
    intervalId = setInterval(() => {
      setPercentage((prev) => Math.min(100, prev + 1));
    }, 15);
  };
  useEffect(() => {
    initTimer();
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (percentage === 100) {
      clearInterval(intervalId);
    }
  }, [percentage]);
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
          <StyledTitle component="h4">
            +{Math.round((MaxExpYears * percentage) / 100)}
          </StyledTitle>
          <StyledContent component="p">Years Experience</StyledContent>
        </StyledSummaryElement>
        <StyledSummaryElement item>
          <StyledTitle component="h4">
            +{Math.round((MaxProjects * percentage) / 100)}
          </StyledTitle>
          <StyledContent component="p">Projects Done</StyledContent>
        </StyledSummaryElement>
        <StyledSummaryElement item>
          <StyledTitle component="h4">
            +{Math.round((MaxClients * percentage) / 100)}
          </StyledTitle>
          <StyledContent component="p">Happy Clients</StyledContent>
        </StyledSummaryElement>
        <StyledSummaryElement item>
          <StyledTitle component="h4">
            +{Math.round((MaxReviews * percentage) / 100)}
          </StyledTitle>
          <StyledContent component="p">Good Reviews</StyledContent>
        </StyledSummaryElement>
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Numbers;
