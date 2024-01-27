import { Box } from "@mui/system";
import {
  StyledColoredTitle,
  StyledParagraph,
  StyledSection,
} from "../About/About.styled";
import ui_design_image from "../../assets/services/ui_design.png";
import ux_design_image from "../../assets/services/ux_design.png";
import social_media_design_image from "../../assets/services/social_media_design.png";
import logo_design_image from "../../assets/services/logo_design.png";
import mobile_app_design_image from "../../assets/services/mobile_app_design.png";
import web_design_image from "../../assets/services/web_design.png";
import identity_design_image from "../../assets/services/identity_design.png";
import graphic_design_image from "../../assets/services/graphic_design.png";
import {
  StyledGridContainer,
  StyledGridItem,
  StyledImage,
} from "./Services.styled";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../assets/content.json";

const imagesLookup = [
  {
    id: "ui_design",
    image: ui_design_image,
  },
  {
    id: "ux_design",
    image: ux_design_image,
  },
  {
    id: "social_media_design",
    image: social_media_design_image,
  },
  {
    id: "logo_design",
    image: logo_design_image,
  },
  {
    id: "mobile_app_design",
    image: mobile_app_design_image,
  },
  {
    id: "web_design",
    image: web_design_image,
  },
  {
    id: "graphic_design",
    image: graphic_design_image,
  },
  {
    id: "identity_design",
    image: identity_design_image,
  },
];
const Services = () => {
  const { language } = useLanguage();
  const content = contentData[language].services;
  return (
    <StyledSection
      style={{
        paddingBottom: "170px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "520px",
          margin: "auto",
          marginBottom: "80px",
        }}
      >
        <StyledColoredTitle
          component="h4"
          sx={{
            margin: "auto",
            padding: "4px 0px",
          }}
        >
          {content.title}
        </StyledColoredTitle>
        <StyledParagraph
          sx={{
            padding: "4px",
          }}
        >
          {content.description}
        </StyledParagraph>
      </Box>
      <StyledGridContainer>
        {content.services.map((service, index) => (
          <StyledGridItem key={index}>
            <Link to={service.path}>
              <StyledImage
                src={
                  imagesLookup.find((image) => image.id === service.id).image
                }
              />
              <h5
                style={{
                  color: "#191919",
                  textAlign: "center",
                  leadingTrim: " both",
                  textEdge: " cap",
                  fontSize: " 24px",
                  fontStyle: " normal",
                  fontWeight: " 700",
                  marginBottom: "16px",
                  padding: "0",
                }}
              >
                {service.header}
              </h5>
              <p
                style={{
                  color: "#4D4D4D",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                }}
              >
                {service.description}
              </p>
            </Link>
          </StyledGridItem>
        ))}
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Services;
