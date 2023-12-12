import { Box, Button, List, ListItem, styled } from "@mui/material";
import { StyledColoredTitle } from "../About/About.styled";

export const StyledContent = styled(Box)({
  marginTop: "80px",
  display: "flex",
  justifyContent: "space-between",
  "@media (width < 750px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const StyledList = styled(List)({
  padding: "0",
  margin: "0",
  "@media (width < 750px)": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      marginBottom: "10px",
    },
  },
});

export const StyledListItem = styled(ListItem)({
  marginBottom: "40px",
  color: "white",
  width: "fit-content",
});

export const StyledContactTitle = styled(StyledColoredTitle)({
  fontSize: "14px",
  padding: "0",
});

export const StyledFormContainer = styled(Box)({
  width: "600px",
});

export const StyledOneLineInput = styled("input")({
  display: "block",
  width: "100%",
  margin: "24px 0",
  height: "52px",
  padding: "20px",
  background: "#0B45B326",
  border: "none",
  outline: "none",
  color: "white",
  borderRadius: "4px",
});
export const StyledMultiLineInput = styled("textarea")({
  display: "block",
  width: "100%",
  margin: "24px 0",
  padding: "20px",
  background: "#0B45B326",
  border: "none",
  outline: "none",
  color: "white",
  borderRadius: "4px",
  height: "156px",
});

export const StyledSubmitButton = styled(Button)({
  width: "100%",
  height: "52px",
  fontWeight: "600",
  fontSize: "16px",
  borderRadius: "4px",
  background: "linear-gradient(45deg,#0B45B3,#288BF0)",
});
