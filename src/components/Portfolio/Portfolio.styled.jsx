import { Box, Grid, Typography, styled } from "@mui/material";

export const StyledNavList = styled("ul")({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  padding: "50px 0",
});
export const StyledNavButton = styled("button")(({ selectedTag }) => ({
  flexGrow: "0",
  flexShrink: "0",
  background: selectedTag
    ? "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)"
    : "transparent",
  color: selectedTag ? "white" : "rgba(40, 139, 240, 0.75)",
  fontSize: "18px",
  fontWeight: "500",
  borderRadius: "100px",
  border: "none",
  whiteSpace: "nowrap",
  padding: "5px 15px",
  cursor: "pointer",
  "&:hover": {
    outline: !selectedTag && "1px solid rgba(40, 139, 240, 0.75)",
  },
}));

export const StyledGridContainer = styled(Grid)({
  placeContent: "center",
  gap: "30px",
});

export const StyledImageContainer = styled(Box)({
  position: "relative",
  height: "500px",
  width: "400px",

  cursor: "pointer",
  borderRadius: "30px",
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
  transition: "all 500ms",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  fontWeight: "600",
  fontSize: "1.5rem",
  borderRadius: "inherit",
  background: "linear-gradient(transparent 70%,#5a6e91)",
  paddingBottom: "30px",
});
