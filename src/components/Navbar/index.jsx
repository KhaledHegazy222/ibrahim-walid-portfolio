import {
  StyledAppBar,
  StyledFilledLink,
  StyledLanguageButton,
  StyledLinkElement,
  StyledLinksList,
  StyledLogoContainer,
  StyledNavigationControls,
  StyledToolbar,
} from "./Navbar.styled";
import logo from "../../assets/logo.svg";
import languageIcon from "../../assets/language.svg";
import menuIcon from "../../assets/menuIcon.svg";
import { IconButton, useMediaQuery } from "@mui/material";
// eslint-disable-next-line react/prop-types
const Navbar = ({ fixed = true }) => {
  const fullDisplay = useMediaQuery("(width > 1000px)");

  return (
    <StyledAppBar component="nav" fixed={fixed}>
      <StyledToolbar
        style={{
          ...(!fullDisplay && {
            width: "auto",
            margin: "8px",
          }),
        }}
      >
        <StyledLogoContainer>
          <img
            src={logo}
            style={{
              ...(!fullDisplay && {
                width: "40%",
              }),
            }}
          />
          <h3>Ibrahim</h3>
        </StyledLogoContainer>
        {fullDisplay ? (
          <StyledNavigationControls>
            <StyledLinksList>
              <StyledLinkElement>
                <a
                  href="#"
                  style={{
                    fontWeight: "700",
                    color: "#45A0FF",
                  }}
                >
                  Home
                </a>
              </StyledLinkElement>
              <StyledLinkElement>
                <a href="#">About</a>
              </StyledLinkElement>
              <StyledLinkElement>
                <a href="#">Portfolio</a>
              </StyledLinkElement>
              <StyledLinkElement>
                <a href="#">Services</a>
              </StyledLinkElement>
              <StyledLinkElement>
                <a href="#">Blog</a>
              </StyledLinkElement>
              <StyledLinkElement>
                <a href="#">Contact</a>
              </StyledLinkElement>
            </StyledLinksList>
            <StyledFilledLink href="#">Download CV</StyledFilledLink>
            <StyledLanguageButton>
              <img src={languageIcon} />
              <p>Ar</p>
            </StyledLanguageButton>
          </StyledNavigationControls>
        ) : (
          <IconButton>
            <img src={menuIcon} />
          </IconButton>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
