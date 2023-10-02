import Card from "./Card";
import card_image from "../../assets/card.png";
import {
  StyledColoredTitle,
  StyledGraySubTitle,
  StyledSection,
} from "../About/About.styled";
import { StyledList } from "./Testimonials.styled";
const Testimonials = () => {
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
        <Card
          title="Owner Of Target Company"
          content="Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida."
          ratingValue={5}
          img={card_image}
          position="Left"
        />
        <Card
          title="Owner Of Target Company"
          content="Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida."
          ratingValue={5}
          img={card_image}
          position="Middle"
        />

        <Card
          title="Owner Of Target Company"
          content="Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida."
          ratingValue={5}
          img={card_image}
          position="Right"
        />
        <Card
          title="Owner Of Target Company"
          content="Lorem ipsum dolor sit amet consectetur. Maecenas proin magna aenean eget quam in sit cursus. Nec dapibus et ut nulla neque hac feugiat. Mollis netus duis a eu condimentum et turpis ultrices. Leo egestas commodo augue leo gravida."
          ratingValue={5}
          img={card_image}
        />
      </StyledList>
    </StyledSection>
  );
};

export default Testimonials;
