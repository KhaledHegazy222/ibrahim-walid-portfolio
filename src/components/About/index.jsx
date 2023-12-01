import { Box, useMediaQuery } from "@mui/material";
import aboutImage from "../../assets/about.svg";
import aboutBorderImage from "../../assets/aboutBorder.svg";
import { StyledFilledLink } from "../Navbar/Navbar.styled";
import WhatsAppOutlined from "../../assets/whatsappOutlined.svg";
import {
  StyledColoredTitle,
  StyledContent,
  StyledParagraph,
  StyledSection,
  StyledTitle,
  StyledZoomedOutImage,
} from "./About.styled";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const About = () => {
  const fullScreenDisplay = useMediaQuery("(width > 1300px)");
  const [zoomIn, setZoomIn] = useState(false);
  const handleEnter = () => {
    setZoomIn(true);
  };
  return (
    <StyledSection>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          "& > *": {
            flex: "1",
          },
          ...(!fullScreenDisplay && {
            flexWrap: "wrap",
            justifyContent: "center",
            "& > *": {
              flex: "unset",
              textAlign: "center",
            },
          }),
        }}
      >
        <Box
          sx={{
            alignSelf: "stretch",
          }}
        >
          <ScrollTrigger onEnter={handleEnter}>
            <Box
              sx={{
                width: "min(80vw,480px)",
                height: "min(80vw,480px)",
                position: "relative",
              }}
            >
              <StyledZoomedOutImage
                src={aboutBorderImage}
                zoomIn={zoomIn}
                style={{ maxWidth: "unset", width: "100%", height: "100%" }}
              />
              <StyledZoomedOutImage
                src={aboutImage}
                zoomIn={true}
                style={{
                  top: "47%",
                  left: "49%",
                  width: "82%",
                  height: "81%",
                }}
              />
            </Box>
          </ScrollTrigger>
        </Box>
        <StyledContent>
          <StyledColoredTitle
            style={{
              fontSize: "24px",
              marginBottom: "40px",
              paddingTop: 0,
              paddingBottom: 0,
              ...(!fullScreenDisplay && {
                margin: "auto",
                marginBottom: "16px",
              }),
            }}
          >
            I&apos;m a Designer
          </StyledColoredTitle>
          <StyledTitle
            style={{
              ...(!fullScreenDisplay && {
                fontSize: "24px",
                margin: "16px 0",
              }),
            }}
          >
            I can design anything
          </StyledTitle>
          <StyledTitle
            style={{
              ...(!fullScreenDisplay && {
                fontSize: "24px",
                margin: "16px 0",
              }),
            }}
          >
            you want
          </StyledTitle>
          <StyledParagraph
            style={{
              margin: "40px 0",
              ...(!fullScreenDisplay && {
                margin: "24px 0",
              }),
            }}
          >
            Hello there! I&apos;m a web designer, and I&apos;m very passionate
            and dedicated to my work. With 20 years experience as a professional
            web developer, I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </StyledParagraph>

          <StyledFilledLink
            href="#"
            style={{
              marginLeft: "0",
              fontSize: fullScreenDisplay ? "18px" : "14px",
              padding: fullScreenDisplay ? "14px 40px" : "10px 40px",
              margin: "0 10px",
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              gap: "8px",
            }}
          >
            <img src={WhatsAppOutlined} /> Get a free consultation now
          </StyledFilledLink>
        </StyledContent>
      </Box>
    </StyledSection>
  );
};

export default About;
