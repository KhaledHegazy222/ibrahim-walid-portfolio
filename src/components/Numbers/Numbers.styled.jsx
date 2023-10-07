import { Typography, styled } from "@mui/material";
import { StyledColoredTitle } from "../About/About.styled";

export const StyledGridContainer = styled("div")({
  display: "flex",
  gap: "30px",

  gridTemplate: "1fr / repeat(4,400px)",
  justifyContent: "space-evenly",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
});

export const StyledSummaryElement = styled("div")({
  background:
    "linear-gradient(90deg, rgba(11, 69, 179, 0.05) 0%, rgba(40, 139, 240, 0.05) 100%)",
  flex: "1",
  aspectRatio: "1 / 1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledTitle = styled(StyledColoredTitle)({
  fontSize: "56px",
  fontWeight: "700",
  padding: "0",
});

export const StyledContent = styled(Typography)({
  fontSize: "24px",
  fontWeight: "400",
});
