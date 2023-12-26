import Card from "./Card";
import card_image from "../../assets/card.png";
import {
  StyledColoredTitle,
  StyledGraySubTitle,
  StyledSection,
} from "../About/About.styled";
import { StyledList } from "./Testimonials.styled";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../assets/content.json";

const testimonialsList = [
  {
    title: "Owner Of Target Company",
    content:
      "Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut ",
    ratingValue: 5,
    image: card_image,
  },
  {
    title: "Owner Of Target Company",
    content:
      "Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. ",
    ratingValue: 3,
    image: card_image,
  },
  {
    title: "Owner Of Target Company",
    content:
      "Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et.",
    ratingValue: 4,
    image: card_image,
  },
  {
    title: "Owner Of Target Company",
    content:
      "Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et.",
    ratingValue: 4,
    image: card_image,
  },
];

const Testimonials = () => {
  const { language } = useLanguage();
  const content = contentData[language].testimonials;

  const [middleCard, setMiddleCard] = useState(0);
  const leftCard = (middleCard + 1) % testimonialsList.length;
  const rightCard =
    (middleCard - 1 + testimonialsList.length) % testimonialsList.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMiddleCard((prevValue) => (prevValue + 1) % testimonialsList.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [setMiddleCard]);
  return (
    <StyledSection
      style={{
        paddingLeft: "0",
        paddingRight: "0",
      }}
    >
      <StyledColoredTitle margin="auto">{content.title}</StyledColoredTitle>
      <StyledGraySubTitle margin="auto" maxWidth="592px" textAlign="center">
        {content.description}
      </StyledGraySubTitle>
      <StyledList>
        {testimonialsList.map(
          ({ title, content, image, ratingValue }, index) => (
            <Card
              key={index}
              title={title}
              content={content}
              img={image}
              ratingValue={ratingValue}
              position={
                index === leftCard
                  ? "Left"
                  : index === rightCard
                  ? "Right"
                  : index === middleCard
                  ? "Middle"
                  : "Hidden"
              }
            />
          )
        )}
      </StyledList>
    </StyledSection>
  );
};

export default Testimonials;
