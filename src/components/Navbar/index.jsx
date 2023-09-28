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

const Navbar = () => {
  return (
    <StyledAppBar component="nav">
      <StyledToolbar>
        <StyledLogoContainer>
          <img src={logo} />
          <h3>Ibrahim Walid</h3>
        </StyledLogoContainer>
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
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
