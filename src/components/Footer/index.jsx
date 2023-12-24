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
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../assets/content.json";

const Footer = () => {
  const { language } = useLanguage();
  const content = contentData[language].footer;
  return (
    <StyledFooter>
      <StyledCopyrights>&copy; {content.content}</StyledCopyrights>
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
