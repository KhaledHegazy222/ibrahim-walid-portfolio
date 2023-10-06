import styled from "@emotion/styled";

import { AppBar, Button, List, ListItem, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  background:
    "linear-gradient(90deg, #00387A -41.84%, #001227 64.41%, #001227 64.41%)",
  position: "fixed",
  boxShadow: "none",
  zIndex: "4",
});

export const StyledToolbar = styled(Toolbar)({
  width: "85%",
  margin: "auto",
  display: "flex",
});

export const StyledLogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledNavigationControls = styled("div")({
  flex: "1",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const StyledLinksList = styled(List)({
  display: "flex",
});

export const StyledLinkElement = styled(ListItem)({
  fontSize: "18px",
  color: "#FFFFFF99",
  "& > *": {
    fontWeight: "inherit",
    color: "inherit",
  },
});

export const StyledFilledLink = styled("a")({
  padding: "8px 24px",
  margin: "0 10px",
  display: "inline-block",
  background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
  color: "white",
  fontWeight: "600",
  fontSize: "1rem",
  borderRadius: "32px",
  textTransform: "none",
});
export const StyledOutlinedLink = styled("a")({
  padding: "8px 24px",
  margin: "0 10px",
  display: "inline-block",
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "white",
  fontWeight: "600",
  fontSize: "1rem",
  borderRadius: "32px",
  textTransform: "none",
});

export const StyledLanguageButton = styled(Button)({
  display: "flex",
  color: "white",
  alignItems: "center",
  gap: "5px",
  textTransform: "capitalize",
  fontSize: "20px",
  fontWeight: "400",
});
