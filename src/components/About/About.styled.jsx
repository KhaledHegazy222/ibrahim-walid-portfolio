import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledSection = styled("section")({
  padding: "100px 0",
  width: "80%",
  margin: "auto",
  gap: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledContent = styled("div")({
  width: "585px",
});

export const StyledColoredSubTitle = styled(Typography)({
  background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
  width: "fit-content",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  fontSize: "24px",
  padding: "20px 0",
});

export const StyledTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: "700",
  textTransform: "capitalize",
  lineHeight: "60px",
});

export const StyledParagraph = styled(Typography)({
  fontSize: "18px",
  fontWeight: "400",
  color: "#7A7A7A",
  padding: "30px 0",
});
