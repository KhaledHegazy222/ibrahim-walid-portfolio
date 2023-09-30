import { List, ListItem, styled } from "@mui/material";

export const StyledList = styled(List)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
  flex: "0",
  maxWidth: "800px",
  margin: "80px auto",
});
export const StyledListItem = styled(ListItem)({
  width: "max-content",
  borderRadius: "8px",
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 0px 15px 0px #0000001F",
  transition: "all 300ms ease-in-out",
  "& > p": {
    fontWeight: "600",
    fontSize: "18px",
  },

  "&:hover": {
    transform: "scale(1.1)",
  },
});
