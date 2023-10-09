import { Box, Typography, styled } from "@mui/material";

export const StyledNavList = styled("ul")({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  padding: "50px 0",
});
export const StyledNavButton = styled("button")(({ selectedTag }) => ({
  flexGrow: "0",
  flexShrink: "0",
  border: "none",
  outline: !selectedTag && "1px solid #0B45B3",
  background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
  WebkitBackgroundClip: !selectedTag && "text",
  WebkitTextFillColor: !selectedTag && "transparent",

  color: selectedTag ? "white" : "#288BF0",
  fontSize: "18px",
  fontWeight: selectedTag ? "600" : "400",
  borderRadius: "100px",
  whiteSpace: "nowrap",
  padding: "5px 15px",
  cursor: "pointer",
  "&:hover": {},
}));

export const StyledGridContainer = styled("div")({
  display: "grid",
  gridTemplate: "1fr / repeat(3,1fr)",
  placeContent: "center",
  gap: "30px",
});

export const StyledImageContainer = styled(Box)({
  position: "relative",
  aspectRatio: "1 / 1",
  cursor: "pointer",
  borderRadius: "12px",
  "&:hover": {
    "& p": {
      opacity: "1",
    },
  },
});

export const StyledImage = styled("img")({
  position: "absolute",
  inset: "0",
  width: "100%",
  height: "100%",
  margin: "auto",
  borderRadius: "inherit",
  zIndex: "1",
});

export const StyledImageDescription = styled(Typography)({
  position: "absolute",
  zIndex: "2",
  opacity: 0,
  color: "white",
  transition: "all 300ms",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",

  width: "100%",
  height: "100%",
  fontWeight: "600",
  borderRadius: "inherit",
  background:
    "linear-gradient(0deg, #0B45B3 0%, #288BF0 20.79%, rgba(40, 139, 240, 0.00) 37.32%)",
});

export const StyledDescriptionTitle = styled(Typography)({
  fontSize: "24px",
  margin: "24px",
  marginBottom: "22px",
  lineHeight: "17px",
  fontWeight: "700",
});
export const StyledDescriptionSubtitle = styled(Typography)({
  fontSize: "20px",
  margin: "15px 30px",
  lineHeight: "14px",
  fontWeight: "400",
});
