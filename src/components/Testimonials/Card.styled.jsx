import { Box, Typography, styled } from "@mui/material";

export const StyledLeftCard = styled(Box)({
  position: "absolute",
  transform: "translateX(-120%) scale(0.8)",
});
export const StyledMiddleCard = styled(Box)({
  position: "absolute",
  transform: "scale(1.05)",
});
export const StyledRightCard = styled(Box)({
  position: "absolute",
  transform: "translateX(120%) scale(0.8)",
});

export const StyledHiddenCard = styled(Box)({
  position: "absolute",
  transform: "translateX(220%)",
  opacity: "0",
});

export const StyledCardBody = styled(Box)({
  background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
  width: "1000px",
  height: "355px",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  padding: "40px",
  color: "white",
});

export const StyledCardTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "600",
  margin: "20px 0",
});
