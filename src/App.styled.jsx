import headerBg from "./assets/headerBG.png";
import styled from "@emotion/styled";

export const StyledHeader = styled("header")({
  background: `url(${headerBg})`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center center",
  color: "white",
  height: "100vh",
});
