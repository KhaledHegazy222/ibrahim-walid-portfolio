import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledSection = styled("section")({
  padding: "120px",
  position: "relative",
  zIndex: "3",
  "@media screen and (width < 1400px)": {
    padding: "30px 16px",
  },
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

export const StyledSubTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "400",
  color: "white",
});

export const StyledGraySubTitle = styled(StyledSubTitle)({
  color: "#7A7A7A",
});
export const StyledTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: "700",
  textTransform: "capitalize",
  margin: "24px 0",
  lineHeight: "38.4px",
  whiteSpace: "nowrap",
});

export const StyledParagraph = styled(Typography)({
  fontSize: "18px",
  fontWeight: "400",
  color: "#7A7A7A",
});

export const StyledZoomedOutImage = styled("img")(({ zoomIn }) => ({
  position: "absolute",
  aspectRatio: "1 / 1",
  maxWidth: "400px",
  transition: "all 400ms",
  transitionDelay: "700ms",
  top: "50%",
  left: "50%",
  transform: `translate(-50%,-50%) ${zoomIn ? "scale(1)" : "scale(1.2)"}`,
}));
