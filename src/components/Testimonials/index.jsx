import Card from "./Card";
import card_image from "../../assets/card.png";
import {
  StyledColoredTitle,
  StyledGraySubTitle,
  StyledSection,
} from "../About/About.styled";
import { StyledList } from "./Testimonials.styled";
import { useEffect, useState } from "react";

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
      "Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida.",
    ratingValue: 3,
    image: card_image,
  },
  {
    title: "Owner Of Target Company",
    content:
      "Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida. Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida.",
    ratingValue: 4,
    image: card_image,
  },
  {
    title: "Owner Of Target Company",
    content:
      "Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida. Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida.",
    ratingValue: 4,
    image: card_image,
  },
];

const Testimonials = () => {
  const [middleCard, setMiddleCard] = useState(0);
  const leftCard = (middleCard + 1) % testimonialsList.length;
  const rightCard =
    (middleCard - 1 + testimonialsList.length) % testimonialsList.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMiddleCard((prevValue) => (prevValue + 1) % testimonialsList.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [setMiddleCard]);
  return (
    <StyledSection
      style={{
        width: "100%",
      }}
    >
      <StyledColoredTitle margin="auto">Testimonials </StyledColoredTitle>
      <StyledGraySubTitle margin="auto" width="592px" textAlign="center">
        Most common methods for designing websites that work well on desktop is
        responsive and adaptive design
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
