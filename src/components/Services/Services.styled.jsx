import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGridContainer = styled("div")({
  display: "grid",
  gridTemplate: "1fr / repeat(4,1fr)",
  gap: "30px",
});

export const StyledGridItem = styled(Grid)({
  backgroundColor: "#f4f8fe",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "53.5px 21.5px",
  aspectRatio: "1 / 1",
  position: "relative",
  transition: "all 300ms",
  "&:hover": {
    backgroundColor: "white",
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.12)",
    "&::before, &::after": {
      width: "80px",
      height: "80px",
      opacity: 1,
    },
  },
  "&::before, &::after": {
    position: "absolute",
    backgroundColor: "#0B45B3",
    content: "''",
    display: "block",
    zIndex: "-1",
    transition: "all 300ms",
    width: "10px",
    height: "10px",
    opacity: "0",
  },
  "&::before": {
    left: "-4px",
    top: "-4px",
    borderTopLeftRadius: "13px",
  },
  "&::after": {
    right: "-4px",
    bottom: "-4px",
    borderBottomRightRadius: "13px",
  },
});

export const StyledImage = styled("img")({
  marginBottom: "24px",
});
