import { StyledColoredTitle, StyledSubTitle } from "../About/About.styled";
import {
  StyledGridContainer,
  StyledGridItem,
  StyledSection,
} from "./Clients.styled";

import creative_design from "../../assets/clients/creative_design.png";
import graphic_design from "../../assets/clients/graphic_design.png";
import ui_ux_design from "../../assets/clients/ui_ux_design.png";
import web_design from "../../assets/clients/web_design.png";
import WhatsappOutlined from "../../assets/WhatsappOutlined";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../assets/content.json";
const imagesLookup = [
  { id: "creative_design", image: creative_design },
  { id: "graphic_design", image: graphic_design },
  { id: "ui_ux_design", image: ui_ux_design },
  { id: "web_design", image: web_design },
];
const Clients = () => {
  const { language } = useLanguage();
  const reverse = language === "ar";
  const content = contentData[language].clients;
  return (
    <StyledSection>
      <StyledColoredTitle margin="auto">{content.title}</StyledColoredTitle>
      <StyledSubTitle margin="auto" maxWidth="592px" textAlign="center">
        {content.description}
      </StyledSubTitle>
      <StyledGridContainer>
        {content.content.map(({ id, title, description }) => (
          <StyledGridItem key={id}>
            <img
              src={imagesLookup.find((elem) => elem.id === id).image}
              alt={title}
            />
            <div>
              <h5>{title}</h5>
              <p>{description}</p>
              <a href="#">
                <WhatsappOutlined />
                {content.contactButton}
                {reverse ? (
                  <ArrowBack
                    sx={{
                      color: "inherit",
                    }}
                  />
                ) : (
                  <ArrowForward
                    sx={{
                      color: "inherit",
                    }}
                  />
                )}
              </a>
            </div>
          </StyledGridItem>
        ))}
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Clients;
