import { Box } from "@mui/system";
import { StyledColoredSubTitle, StyledParagraph } from "../About/About.styled";
import ui_design_image from "../../assets/services/ui_design.png";
import ux_design_image from "../../assets/services/ux_design.png";
import social_media_design_image from "../../assets/services/social_media_design.png";
import logo_design_image from "../../assets/services/logo_design.png";
import mobile_app_design_image from "../../assets/services/mobile_app_design.png";
import web_design_image from "../../assets/services/web_design.png";
import identity_design_image from "../../assets/services/identity_design.png";
import graphic_design_image from "../../assets/services/graphic_design.png";
import { StyledGridContainer, StyledGridItem, StyledSection } from "./Services.styled";

const servicesList = [
  {
    title: "UI Design",
    content: "Most common methods for designing websites that",
    image: ui_design_image,
  },
  {
    title: "UX Design",
    content: "Most common methods for designing websites that",
    image: ux_design_image,
  },
  {
    title: "Social Media Designs",
    content: "Most common methods for designing websites that",
    image: social_media_design_image,
  },
  {
    title: "Logo Design",
    content: "Most common methods for designing websites that",
    image: logo_design_image,
  },
  {
    title: "Mobile App Design",
    content: "Most common methods for designing websites that",
    image: mobile_app_design_image,
  },
  {
    title: "Web Design",
    content: "Most common methods for designing websites that",
    image: web_design_image,
  },
  {
    title: "Graphic Design",
    content: "Most common methods for designing websites that",
    image: graphic_design_image,
  },
  {
    title: "Identy Design",
    content: "Most common methods for designing websites that",
    image: identity_design_image,
  },
];

const Services = () => {
  return (
    <StyledSection>
      <Box
        sx={{
          textAlign: "center",
          width: "520px",
          margin: "auto",
        }}
      >
        <StyledColoredSubTitle
          component="h4"
          style={{
            margin: "auto",
            padding: "4px 0px",
          }}
        >
          Services
        </StyledColoredSubTitle>
        <StyledParagraph
          style={{
            padding: "4px",
          }}
        >
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </StyledParagraph>
      </Box>
      <StyledGridContainer container>
        {servicesList.map((service, index) => (
          <StyledGridItem item key={index}>
            <img src={service.image} />
            <h5
              style={{
                fontWeight: "700",
                fontSize: "24px",
                whiteSpace: "nowrap",
              }}
            >
              {service.title}
            </h5>
            <p>{service.content}</p>
          </StyledGridItem>
        ))}
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Services;
