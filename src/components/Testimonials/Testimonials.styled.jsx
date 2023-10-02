import { List, styled } from "@mui/material";

export const StyledList = styled(List)({
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  height: "400px",
  padding: "30px 0",
  gap: "30px",
  "& > *": {
    flexShrink: "0",
  },
});
