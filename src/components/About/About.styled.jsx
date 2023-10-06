import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledSection = styled("section")({
  padding: "120px",
  position: "relative",
  zIndex: "3",
});

export const StyledContent = styled("div")({
  width: "585px",
});

export const StyledColoredTitle = styled(Typography)({
  background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
  width: "fit-content",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  fontSize: "24px",
  padding: "20px 0",
});
export const StyledGraySubTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "400",
  color: "#7A7A7A",
});

export const StyledTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: "700",
  textTransform: "capitalize",
  margin: "24px 0",
  lineHeight: "34px",
});

export const StyledParagraph = styled(Typography)({
  fontSize: "18px",
  fontWeight: "400",
  color: "#7A7A7A",
});
