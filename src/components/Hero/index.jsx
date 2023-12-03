import Typed from "react-typed";

import heroImage from "../../assets/hero.png";
import whatsappGreenIcon from "../../assets/whatsappGreen.svg";

import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import behanceIcon from "../../assets/behance.svg";
import twitterIcon from "../../assets/twitter.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

import { StyledFilledLink, StyledOutlinedLink } from "../Navbar/Navbar.styled";
import {
  StyleLinksList,
  StyledImage,
  StyledTextSection,
  StyledWhatsappLink,
} from "./Hero.styled";
import ParticlesBackground from "../ParticlesBackground";
import { Box, Typography, useMediaQuery } from "@mui/material";
const Hero = () => {
  const fullScreenDisplay = useMediaQuery("(width > 1400px)");

  return (
    <>
      {/* <ParticlesBackground /> */}
      <Box
        component="section"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: "2",
          padding: "120px",
          gap: "30px",
          margin: "24px 0",
          ...(!fullScreenDisplay && {
            flexWrap: "wrap-reverse",
            padding: "32px 16px ",
          }),
        }}
      >
        <StyledTextSection>
          <Typography
            sx={{
              fontSize: "24px",
              marginBottom: "16px",
              lineHeight: "17px",
              fontWeight: "500",
              ...(!fullScreenDisplay && {
                fontSize: "14px",
                lineHeight: "17px",
              }),
            }}
          >
            Hello, I&apos;m
          </Typography>
          <Typography
            sx={{
              fontSize: "56px",
              lineHeight: "56px",
              fontWeight: "600",
              ...(!fullScreenDisplay && {
                fontSize: "24px",
                lineHeight: "38.4px",
              }),
            }}
          >
            Ibrahim Walid
          </Typography>
          <Typography
            sx={{
              fontSize: "53px",
              lineHeight: "56px",
              whiteSpace: "nowrap",
              fontWeight: "600",
              ...(!fullScreenDisplay && {
                fontSize: "24px",
                lineHeight: "38.4px",
              }),
            }}
          >
            A Creative{" "}
            <span
              style={{
                color: "#45A0FF",
              }}
            >
              <Typed
                strings={["UI/UX Designer", "Web Designer"]}
                typeSpeed={60}
                backSpeed={60}
                backDelay={3000}
                loop
              />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              marginTop: "24px",
              ...(!fullScreenDisplay && {
                fontSize: "14px",
                lineHeight: "17px",
                marginTop: "16px",
              }),
            }}
          >
            I&apos;m creative designer based in New York, and I&apos;m very
            passionate and dedicated to my work
          </Typography>
          <div
            style={{
              margin: "40px 0",
            }}
          >
            <StyledFilledLink
              href="#"
              style={{
                width: "150px",
                textAlign: "center",
                marginLeft: "0",
              }}
            >
              Hire me
            </StyledFilledLink>
            <StyledOutlinedLink href="#"> See Portfolio</StyledOutlinedLink>
          </div>
          <div>
            <StyleLinksList centered={!fullScreenDisplay}>
              <li>
                <img src={facebookIcon} alt="" />
              </li>
              <li>
                <img src={behanceIcon} alt="" />
              </li>
              <li>
                <img src={linkedinIcon} alt="" />
              </li>
              <li>
                <img src={twitterIcon} alt="" />
              </li>
              <li>
                <img src={telegramIcon} alt="" />
              </li>
              <li>
                <img src={whatsappIcon} alt="" />
              </li>
            </StyleLinksList>
          </div>
        </StyledTextSection>
        <StyledImage src={heroImage} />
      </Box>
      {/* <StyledWhatsappLink href="#">
        <img
          src={whatsappGreenIcon}
          style={{
            margin: "0",
            padding: "0",
          }}
        />
        <Typography>Get a free consultation now</Typography>
      </StyledWhatsappLink> */}
    </>
  );
};

export default Hero;
