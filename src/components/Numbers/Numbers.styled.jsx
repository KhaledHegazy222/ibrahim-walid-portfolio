import { Grid, Typography, styled } from "@mui/material";
import { StyledColoredSubTitle } from "../About/About.styled";

export const StyledGridContainer = styled(Grid)({
  display: "gird",
  gridTemplate: "1fr / repeat(auto-fit,400px)",
  justifyContent: "space-evenly",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
});

export const StyledSummaryElement = styled(Grid)({
  background:
    "linear-gradient(90deg, rgba(11, 69, 179, 0.05) 0%, rgba(40, 139, 240, 0.05) 100%)",
  width: "280px",
  height: "230px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledTitle = styled(StyledColoredSubTitle)({
  fontSize: "56px",
  fontWeight: "700",
  padding: "0",
});

export const StyledContent = styled(Typography)({
  fontSize: "24px",
  fontWeight: "400",
});
