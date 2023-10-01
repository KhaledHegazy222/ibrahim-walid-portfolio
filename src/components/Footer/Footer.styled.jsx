import { List, Typography, styled } from "@mui/material";

export const StyledFooter = styled("footer")({
  backgroundColor: "#001227",
  color: "white",
  display: "flex",
  height: "80px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 50px",
  position: "relative",
  zIndex: "5",
});

export const StyledCopyrights = styled(Typography)({
  display: "inline-block",
});

export const StyledList = styled(List)({
  display: "inline-flex",
});
