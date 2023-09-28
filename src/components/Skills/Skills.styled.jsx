import styled from "@emotion/styled";
import { List, ListItem } from "@mui/material";

export const StyledList = styled(List)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  padding: "30px 0",
  flexWrap: "wrap ",
});

export const StyledListItem = styled(ListItem)({
  padding: "24px 32px",
  margin: "10px",
  whiteSpace: "nowrap",
  fontWeight: "600",
  borderRadius: "8px",
  background:
    "linear-gradient(90deg, rgba(11, 69, 179, 0.1) 0%, rgba(40, 139, 240, 0.1) 100%)",
  width: "max-content",
  cursor: "default",
  "&:hover": {
    color: "white",
    background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
  },
});
