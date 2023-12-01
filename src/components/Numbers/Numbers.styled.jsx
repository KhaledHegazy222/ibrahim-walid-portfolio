import { Typography, styled } from "@mui/material";
import { StyledColoredTitle } from "../About/About.styled";

export const StyledGridContainer = styled("div")({
  display: "flex",
  gap: "30px",

  justifyContent: "space-evenly",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",

  "@media (width < 500px)": {
    gap: "16px",
  },
  // "@media (width < 720px)": {
  //   display: "grid",
  //   gridTemplate: "1fr / repeat(2,200px)",
  //   justifyContent: "center",
  // },

  // "@media (width < 500px)": {
  //   display: "grid",
  //   gridTemplate: "1fr / 200px",
  //   justifyContent: "center",
  // },
});

// export const StyledGridContainer = styled("div")({
//   display: "grid",
//   gap: "30px",
//   gridTemplate: "1fr / repeat(auto-fit,400px)",
//   justifyContent: "center",
//   alignItems: "center",
//   justifyItems: "center",
//   alignContent: "center",
// });

export const StyledSummaryElement = styled("div")({
  background:
    "linear-gradient(90deg, rgba(11, 69, 179, 0.05) 0%, rgba(40, 139, 240, 0.05) 100%)",
  flex: "1",
  aspectRatio: "1 / 1",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: " 12px 7px",
});

export const StyledTitle = styled(StyledColoredTitle)({
  fontSize: "56px",
  fontWeight: "700",
  padding: "0",
  "@media (width < 1000px)": {
    fontSize: "40px",
  },
  "@media (width < 500px)": {
    fontSize: "18px",
    lineHeight:"25.5px"
  },
});

export const StyledContent = styled(Typography)({
  fontSize: "24px",
  fontWeight: "400",
  textAlign: "center",
  "@media (width < 1000px)": {
    fontSize: "18px",
  },

  "@media (width < 500px)": {
    fontSize: "12px",
  },
});
