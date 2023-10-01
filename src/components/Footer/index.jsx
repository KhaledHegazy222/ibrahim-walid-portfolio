import { ListItem } from "@mui/material";
import { StyledCopyrights, StyledFooter, StyledList } from "./Footer.styled";

import behance_image from "../../assets/footer/behance.png";
import facebook_image from "../../assets/footer/facebook.png";
import linkedin_image from "../../assets/footer/linkedin.png";
import twitter_image from "../../assets/footer/twitter.png";
import whatsapp_image from "../../assets/footer/whatsapp.png";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyrights>
        &copy; 2023 copyright all rights reserved
      </StyledCopyrights>
      <StyledList>
        <ListItem>
          <a href="#">
            <img src={behance_image} alt="" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <img src={facebook_image} alt="" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <img src={linkedin_image} alt="" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <img src={twitter_image} alt="" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <img src={whatsapp_image} alt="" />
          </a>
        </ListItem>
      </StyledList>
    </StyledFooter>
  );
};

export default Footer;
