import styled from "@emotion/styled";
import { List } from "@mui/material";

export const StyleLinksList = styled(List)(({ centered, reverse }) => ({
  margin: "20px 0",
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
  gap: "10px",
  justifyContent: centered ? "center" : "flex-start",
}));

export const StyledWhatsappLink = styled("a")({
  position: "fixed",
  zIndex: "4",
  right: "20px",
  bottom: "20px",
  "& p": {
    backgroundColor: "#1a3d27cc",
    padding: "16px 24px",
    fontWeight: "700",
    fontSize: "16px",
    color: "white",
    borderRadius: "8px",
    position: "absolute",
    top: "0px",
    right: "20px",
    lineHeight: "11px",
    width: "max-content",
    opacity: 0,
    transition: "all 500ms, opacity 300ms",
  },
  "&:hover p": {
    top: "10px",
    right: "80px",
    opacity: 1,
  },
});

export const StyledImage = styled("img")({
  flex: 5,
  width: "100%",
  "@media screen and (width < 1400px)": {
    flex: "unset",
    width: "min(100%,500px)",
    margin: "24px 0",
  },
});

export const StyledTextSection = styled("div")({
  flex: 7,
  "@media screen and (width < 1400px)": {
    flex: "unset",
    "& *": {
      textAlign: "center",
    },
  },
});
