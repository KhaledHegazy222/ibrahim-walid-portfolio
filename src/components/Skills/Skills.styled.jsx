import styled from "@emotion/styled";
import { List, ListItem } from "@mui/material";

export const StyledList = styled(List)(({ reverse }) => ({
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  padding: 0,
  paddingTop: "80px",
  flexWrap: "wrap ",
}));

export const StyledListItem = styled(ListItem)({
  padding: "24px 32px",
  margin: "12px",
  whiteSpace: "nowrap",
  width: "max-content",
  cursor: "default",
  fontWeight: "600",
  borderRadius: "8px",
  fontSize: "18px",
  lineHeight: "160%",
  background:
    "linear-gradient(90deg, rgba(11, 69, 179, 0.1) 0%, rgba(40, 139, 240, 0.1) 100%)",
  position: "relative",

  transition: "all 300ms",

  "&::before": {
    content: "''",
    background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%,",
    height: "100%",
    borderRadius: "inherit",
    opacity: 0,
    transition: "inherit",
  },

  "&:hover": {
    color: "white",
    "&::before": {
      opacity: 1,
    },
  },
});
