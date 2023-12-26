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
import LanguageIcon from "@mui/icons-material/Language";
// import languageIcon from "../../assets/language.svg";
import menuIcon from "../../assets/menuIcon.svg";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../assets/content.json";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ fixed = true }) => {
  const fullDisplay = useMediaQuery("(width > 1000px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const { language, setLanguage } = useLanguage();
  const reverse = language === "ar";
  const content = contentData[language].navbar;
  const changeLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <>
      <StyledAppBar component="nav" fixed={fixed}>
        <StyledToolbar
          style={{
            ...(!fullDisplay && {
              width: "auto",
              margin: "8px",
            }),
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
            }}
          >
            <StyledLogoContainer>
              <img
                src={logo}
                style={{
                  width: "40px",
                }}
              />
              <h3 style={{ fontSize: "2rem" }}>{content.title}</h3>
            </StyledLogoContainer>
          </Link>
          {fullDisplay ? (
            <StyledNavigationControls>
              <StyledLinksList>
                {content.navigation.map(({ name, path }, index) => (
                  <StyledLinkElement key={name}>
                    <a
                      href={path}
                      style={{
                        width: "max-content",
                        ...(index === 0 && {
                          fontWeight: "700",
                          color: "#45A0FF",
                        }),
                      }}
                    >
                      {name}
                    </a>
                  </StyledLinkElement>
                ))}
              </StyledLinksList>
              <StyledFilledLink href="#">{content.resume}</StyledFilledLink>
              <StyledLanguageButton onClick={changeLanguage}>
                <LanguageIcon />
                <p>{language === "en" ? "ar" : "en"}</p>
              </StyledLanguageButton>
            </StyledNavigationControls>
          ) : (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <img src={menuIcon} />
            </IconButton>
          )}
        </StyledToolbar>
      </StyledAppBar>
      {!fullDisplay && (
        <Drawer
          anchor={reverse ? "right" : "left"}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              padding: "10px",
              minWidth: "min(90vw,300px)",
            },
          }}
        >
          <Link to="/">
            <StyledLogoContainer>
              <img
                src={logo}
                style={{
                  width: "40px",
                }}
              />
              <h3 style={{ fontSize: "2rem", color: "black" }}>
                {content.title}
              </h3>
            </StyledLogoContainer>
          </Link>
          <List>
            {content.navigation.map(({ name, path }, index) => (
              <ListItem key={name}>
                <a
                  href={path}
                  style={{
                    width: "max-content",
                    ...(index === 0
                      ? {
                          fontWeight: "700",
                          color: "#45A0FF",
                        }
                      : { color: "black" }),
                  }}
                >
                  {name}
                </a>
              </ListItem>
            ))}
          </List>
          <Divider
            sx={{
              bgcolor: "#45A0FF",
              margin: "20px 0",
            }}
          />
          <StyledFilledLink href="#">{content.resume}</StyledFilledLink>

          <StyledLanguageButton
            onClick={changeLanguage}
            style={{
              color: "black",
            }}
          >
            <LanguageIcon />
            <p>{language === "en" ? "ar" : "en"}</p>
          </StyledLanguageButton>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
