import { useEffect, useState } from "react";
import { StyledSection } from "../About/About.styled";
import {
  StyledContent,
  StyledGridContainer,
  StyledSummaryElement,
  StyledTitle,
} from "./Numbers.styled";
import ScrollTrigger from "react-scroll-trigger";
import { useLanguage } from "../../contexts/LanguageContext";
let intervalId;

const MaxExpYears = 3;
const MaxProjects = 15;
const MaxClients = 150;
const MaxReviews = 240;

const Numbers = () => {
  const [percentage, setPercentage] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const initTimer = () => {
    intervalId = setInterval(() => {
      setPercentage((prev) => Math.min(100, prev + 1));
    }, 15);
  };
  useEffect(() => {
    if (startCounting === true && percentage === 0) {
      initTimer();
    }
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCounting]);
  useEffect(() => {
    if (percentage === 100) {
      setStartCounting(false);
      clearInterval(intervalId);
    }
  }, [percentage]);
  const { language } = useLanguage();

  return (
    <StyledSection
      style={{
        background:
          "linear-gradient(54.59deg, #00387A 5.04%, #001227 62.83%, #001227 62.83%)",
        color: "white",
      }}
    >
      <ScrollTrigger onEnter={() => setStartCounting(true)}>
        <StyledGridContainer>
          <StyledSummaryElement>
            <StyledTitle component="h4">
              +{Math.round((MaxExpYears * percentage) / 100)}
            </StyledTitle>
            <StyledContent component="p">Years Experience</StyledContent>
          </StyledSummaryElement>
          <StyledSummaryElement>
            <StyledTitle component="h4">
              +{Math.round((MaxProjects * percentage) / 100)}
            </StyledTitle>
            <StyledContent component="p">Projects Done</StyledContent>
          </StyledSummaryElement>
          <StyledSummaryElement>
            <StyledTitle component="h4">
              +{Math.round((MaxClients * percentage) / 100)}
            </StyledTitle>
            <StyledContent component="p">Happy Clients</StyledContent>
          </StyledSummaryElement>
          <StyledSummaryElement>
            <StyledTitle component="h4">
              +{Math.round((MaxReviews * percentage) / 100)}
            </StyledTitle>
            <StyledContent component="p">Good Reviews</StyledContent>
          </StyledSummaryElement>
        </StyledGridContainer>
      </ScrollTrigger>
    </StyledSection>
  );
};

export default Numbers;
