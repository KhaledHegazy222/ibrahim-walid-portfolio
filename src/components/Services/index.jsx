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

const servicesList = [
  {
    path: "/ui-design",
    title: "UI Design",
    content: "Most common methods for designing websites that",
    image: ui_design_image,
  },
  {
    path: "/ui-design",
    title: "UX Design",
    content: "Most common methods for designing websites that",
    image: ux_design_image,
  },
  {
    path: "/ui-design",
    title: "Social Media Designs",
    content: "Most common methods for designing websites that",
    image: social_media_design_image,
  },
  {
    path: "/ui-design",
    title: "Logo Design",
    content: "Most common methods for designing websites that",
    image: logo_design_image,
  },
  {
    path: "/ui-design",
    title: "Mobile App Design",
    content: "Most common methods for designing websites that",
    image: mobile_app_design_image,
  },
  {
    path: "/ui-design",
    title: "Web Design",
    content: "Most common methods for designing websites that",
    image: web_design_image,
  },
  {
    path: "/ui-design",
    title: "Graphic Design",
    content: "Most common methods for designing websites that",
    image: graphic_design_image,
  },
  {
    path: "/ui-design",
    title: "Identy Design",
    content: "Most common methods for designing websites that",
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
          <Link to={service.path} key={index}>
            <StyledGridItem>
              <StyledImage src={service.image} />
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
            </StyledGridItem>
          </Link>
        ))}
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Services;
