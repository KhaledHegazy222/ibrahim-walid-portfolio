import { List, Typography, styled } from "@mui/material";

export const StyledFooter = styled("footer")({
  backgroundColor: "#001227",
  color: "white",
  display: "flex",
  height: "80px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 80px",
  paddingLeft: "120px",
  position: "relative",
  zIndex: "2",
});

export const StyledCopyrights = styled(Typography)({
  display: "inline-block",
});

export const StyledList = styled(List)({
  display: "inline-flex",
  padding: 0,
  paddingRight: "30px",
  margin: 0,
  gap: "15px",
  "& *": {
    margin: 0,
    padding: 0,
  },
});
