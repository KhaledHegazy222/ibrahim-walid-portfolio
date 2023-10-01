import { Box, Button, ListItem, styled } from "@mui/material";
import { StyledColoredTitle } from "../About/About.styled";

export const StyledContent = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "50px 15%",
});

export const StyledListItem = styled(ListItem)({
  margin: "30px 0",
  color: "white",
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
export const StyledMultiLineInput = styled(StyledOneLineInput)({
  height: "156px",
});

export const StyledSubmitButton = styled(Button)({
  width: "100%",
  height: "52px",
  fontWeight: "600",
  fontSize: "16px",
  borderRadius: "4px",
});
