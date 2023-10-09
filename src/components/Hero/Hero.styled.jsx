import styled from "@emotion/styled";
import { List } from "@mui/material";

export const StyleLinksList = styled(List)({
  margin: "20px 0",
  display: "flex",
  gap: "10px",
});

export const StyledWhatsappLink = styled("a")({
  position: "fixed",
  zIndex: "4",
  right: "20px",
  bottom: "20px",
  "& p": {
    backgroundColor: "#1a3d27cc",
    padding: "16px 24px",
    fontWeight: "700",
    fontSize: "16px",
    color: "white",
    borderRadius: "8px",
    position: "absolute",
    top: "0px",
    right: "20px",
    lineHeight: "11px",
    width: "max-content",
    opacity: 0,
    transition: "all 500ms, opacity 300ms",
  },
  "&:hover p": {
    top: "10px",
    right: "80px",
    opacity: 1,
  },
});
