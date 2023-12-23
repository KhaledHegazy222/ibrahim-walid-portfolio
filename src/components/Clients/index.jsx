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
import { ArrowForward } from "@mui/icons-material";
import { useLanguage } from "../../contexts/LanguageContext";

const Clients = () => {
  const { language } = useLanguage();

  return (
    <StyledSection>
      <StyledColoredTitle margin="auto">
        What I Do for Clients
      </StyledColoredTitle>
      <StyledSubTitle margin="auto" maxWidth="592px" textAlign="center">
        Most common methods for designing websites that work well on desktop is
        responsive and adaptive design
      </StyledSubTitle>
      <StyledGridContainer>
        <StyledGridItem>
          <img src={creative_design} alt="" />
          <div>
            <h5>Creative Design</h5>
            <p>
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development
            </p>
            <a href="#">
              <WhatsappOutlined />
              Contact us to know the details
              <ArrowForward
                sx={{
                  color: "inherit",
                }}
              />
            </a>
          </div>
        </StyledGridItem>
        <StyledGridItem>
          <img src={graphic_design} alt="" />
          <div>
            <h5>Graphic Design</h5>
            <p>
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development
            </p>
            <a href="#">
              <WhatsappOutlined />
              Contact us to know the details{" "}
              <ArrowForward
                sx={{
                  color: "inherit",
                }}
              />
            </a>
          </div>
        </StyledGridItem>
        <StyledGridItem>
          <img src={ui_ux_design} alt="" />
          <div>
            <h5>UI/UX Design</h5>
            <p>
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development
            </p>
            <a href="#">
              <WhatsappOutlined />
              Contact us to know the details{" "}
              <ArrowForward
                sx={{
                  color: "inherit",
                }}
              />
            </a>
          </div>
        </StyledGridItem>
        <StyledGridItem>
          <img src={web_design} alt="" />
          <div>
            <h5>Web Design</h5>
            <p>
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development
            </p>
            <a href="#">
              <WhatsappOutlined />
              Contact us to know the details{" "}
              <ArrowForward
                sx={{
                  color: "inherit",
                }}
              />
            </a>
          </div>
        </StyledGridItem>
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Clients;
