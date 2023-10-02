import { Box, Typography, styled } from "@mui/material";

export const StyledLeftCard = styled(Box)({
  position: "absolute",
  opacity: 1,
  "@keyframes ShowLeft": {
    from: {
      transform: "translateX(-220%)",
    },
    to: {
      transform: "translateX(-120%) scale(0.8)",
    },
  },
  animation: "ShowLeft 2s ease",
  animationFillMode: "forwards",
});
export const StyledMiddleCard = styled(Box)({
  position: "absolute",
  opacity: 1,

  "@keyframes ShowMiddle": {
    from: {
      transform: "translateX(-120%) scale(0.8)",
    },
    to: {
      transform: "translateX(0) scale(1.05)",
    },
  },
  animation: "ShowMiddle 2s ease",
  animationFillMode: "forwards",
});
export const StyledRightCard = styled(Box)({
  position: "absolute",
  opacity: 1,
  "@keyframes ShowRight": {
    from: {
      transform: "translateX(0) scale(1.05)",
    },
    to: {
      transform: "translateX(120%) scale(0.8)",
    },
  },
  animation: "ShowRight 2s ease",
  animationFillMode: "forwards",
});

export const StyledHiddenCard = styled(Box)({
  position: "absolute",
  "@keyframes Hide": {
    from: {
      transform: "translateX(120%) scale(0.8)",
      opacity: 1,
    },
    to: {
      transform: "translateX(220%)",
      opacity: 0,
    },
  },
  animation: "Hide 2s ease",
  animationFillMode: "forwards",
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
