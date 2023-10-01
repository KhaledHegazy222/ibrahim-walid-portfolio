import { styled } from "@mui/material";
import { StyledSection as DefaultStyledSection } from "../About/About.styled";
export const StyledSection = styled(DefaultStyledSection)({
  width: "100%",
  background:
    "linear-gradient(54.59deg, #00387A 5.04%, #001227 62.83%, #001227 62.83%)",
});

export const StyledGridContainer = styled("ul")({
  padding: "60px 0",
  display: "grid",
  gridTemplate: "1fr / repeat(auto-fit,585px)",
  gap: "30px",
  justifyContent: "center",
  alignContent: "center",
  justifyItems: "center",
  alignItems: "center",
});
export const StyledGridItem = styled("li")({
  display: "flex",
  alignItems: "flex-start",
  gap: "30px",
  background: "white",
  borderRadius: "8px",
  padding: "30px",

  "& h5": {
    fontSize: "24px",
    fontWeight: "700",
    padding: "10px 0",
  },

  "& a": {
    color: "#0B45B3",
    fontWeight: "500",
    fontSize: "1rem",
    padding: "10px 0",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "&:hover": {
    background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
    color: "white",
    "& a": {
      color: "inherit",
    },
  },
});
