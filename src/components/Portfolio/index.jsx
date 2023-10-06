import {
  StyledColoredTitle,
  StyledGraySubTitle,
  StyledSection,
} from "../About/About.styled";

import item1_image from "../../assets/Portfolio/Item1.png";
import item2_image from "../../assets/Portfolio/Item2.png";
import item3_image from "../../assets/Portfolio/Item3.png";
import item4_image from "../../assets/Portfolio/Item4.png";
import item5_image from "../../assets/Portfolio/Item5.png";
import { useState } from "react";
import {
  StyledNavList,
  StyledNavButton,
  StyledImage,
  StyledGridContainer,
  StyledImageContainer,
  StyledImageDescription,
} from "./Portfolio.styled";

const tagsList = [
  {
    title: "All",
    tagName: "*",
  },
  {
    title: "UI Designs",
    tagName: "ui_ux",
  },
  {
    title: "Social Media Designs",
    tagName: "social_media",
  },
  {
    title: "Logo Designs",
    tagName: "logos",
  },
  {
    title: "Poster Designs",
    tagName: "posters",
  },
];

const ImageList = [
  {
    title: "Foodly App",
    tags: ["ui_ux"],
    image: item1_image,
  },
  {
    title: "Hamada App",
    tags: ["social_media"],
    image: item2_image,
  },
  {
    title: "Mahmoud App",
    tags: ["logos"],
    image: item3_image,
  },
  {
    title: "None App",
    tags: ["posters"],
    image: item4_image,
  },
  {
    title: "Test App",
    tags: ["social_media", "ui_ux"],
    image: item5_image,
  },
];

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("*");

  return (
    <StyledSection>
      <StyledColoredTitle margin="auto">Portfolio</StyledColoredTitle>
      <StyledGraySubTitle margin="auto" width="592px" textAlign="center">
        Most common methods for designing websites that work well on desktop is
        responsive and adaptive design
      </StyledGraySubTitle>
      <StyledNavList>
        {tagsList.map((tag) => (
          <StyledNavButton
            key={tag.tagName}
            onClick={() => setSelectedTag(tag.tagName)}
            selectedTag={selectedTag === tag.tagName}
          >
            {tag.title}
          </StyledNavButton>
        ))}
      </StyledNavList>
      <StyledGridContainer container>
        {ImageList.filter((image) => {
          if (selectedTag === "*") return true;
          return image.tags.includes(selectedTag);
        }).map((image) => (
          <StyledImageContainer key={image.title}>
            <StyledImage src={image.image} />
            <StyledImageDescription>{image.title} </StyledImageDescription>
          </StyledImageContainer>
        ))}
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Portfolio;
