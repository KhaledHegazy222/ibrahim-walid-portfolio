import { List, ListItem, Typography, styled } from "@mui/material";

export const StyledFooter = styled("footer")({
  backgroundColor: "#001227",
  color: "white",
  display: "flex",
  minHeight: "80px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 80px",
  paddingLeft: "120px",
  zIndex: "2",
  "@media (width < 872px)": {
    padding: "20px 60px",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  "@media (width < 500px)": {
    padding: "20px",
  },
});

export const StyledCopyrights = styled(Typography)({
  display: "inline-block",
});

export const StyledList = styled(List)({
  display: "inline-flex",
  padding: 0,
  paddingRight: "30px",
  margin: 0,
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",

  "@media (width < 872px)": {
    padding: "0",
  },
  "@media (width < 350px)": {
    flexWrap: "wrap",
  },
});

export const StyledListItem = styled(ListItem)({
  padding: 0,
  margin: 0,
  "& *": {
    margin: "auto",
  },
});
