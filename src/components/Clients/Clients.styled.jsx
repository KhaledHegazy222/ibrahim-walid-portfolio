import { styled } from "@mui/material";
import { StyledSection as DefaultStyledSection } from "../About/About.styled";
export const StyledSection = styled(DefaultStyledSection)({
  width: "100%",
  background:
    "linear-gradient(54.59deg, #00387A 5.04%, #001227 62.83%, #001227 62.83%)",
});

export const StyledGridContainer = styled("ul")({
  padding: "0",
  marginTop: "80px",
  display: "grid",
  gridTemplate: "1fr / repeat(2,1fr)",
  gap: "30px",
  justifyContent: "center",
  alignContent: "center",
  justifyItems: "center",
  alignItems: "center",
  "@media (width < 900px)": {
    gridTemplate: "1fr / 1fr",
  },
});
export const StyledGridItem = styled("li")({
  display: "flex",
  alignItems: "flex-start",
  gap: "24px",
  background: "white",
  borderRadius: "8px",
  padding: "54px 78px",
  "& img": {
    opacity: "2",
  },
  "& h5": {
    fontSize: "24px",
    fontWeight: "700",
  },
  "& p": {
    margin: "24px 0",
  },
  "& a, & a svg": {
    color: "#0B45B3",
    fill: "#0B45B3",
    fontWeight: "500",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "&:hover": {
    background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
    color: "white",
    fill: "white",
    "& a, & a svg": {
      color: "inherit",
      fill: "inherit",
    },
  },
  "@media (width < 1300px)": {
    padding: "54px 48px",
  },
  "@media (width < 1000px)": {
    padding: "34px 28px",
  },
  "@media (width < 650px)": {
    flexDirection: "column",
    alignItems: "center",
    "& * ": {
      textAlign: "center",
      margin: "auto",
    },
    "& a": {
      width: "fit-content",
    },
  },
});
