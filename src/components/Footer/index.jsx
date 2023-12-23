import {
  StyledCopyrights,
  StyledFooter,
  StyledList,
  StyledListItem,
} from "./Footer.styled";

import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import behanceIcon from "../../assets/behance.svg";
import twitterIcon from "../../assets/twitter.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyrights>
        &copy; 2024 copyright all rights reserved
      </StyledCopyrights>
      <StyledList>
        <StyledListItem>
          <a href="#">
            <img src={facebookIcon} alt="" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={linkedinIcon} alt="" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={behanceIcon} alt="" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={twitterIcon} alt="" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={telegramIcon} alt="" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={whatsappIcon} alt="" />
          </a>
        </StyledListItem>
      </StyledList>
    </StyledFooter>
  );
};

export default Footer;
