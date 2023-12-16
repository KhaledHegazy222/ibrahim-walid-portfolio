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
      transform: "translateX(calc(50%-500px)) scale(1)",
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
      transform: "translateX(calc(50%-500px)) scale(1)",
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
  minHeight: "355px",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  padding: "40px",
  color: "white",
  "@media (width < 1050px)": {
    display: "block",
    width: "350px",
    padding: "24px 16px",
    "& *": {
      textAlign: "center",
    },
  },
});

export const StyledCardTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "600",
  margin: "20px 0",
});
