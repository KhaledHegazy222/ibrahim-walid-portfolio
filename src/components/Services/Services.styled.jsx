import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGridContainer = styled(Grid)({
  padding: "50px 0",
  display: "grid",
  gridTemplate: "1fr / repeat(auto-fill,400px)",
  justifyContent: "center",
  justifyItems: "center",
  alignContent: "center",
  alignItems: "center",
});

export const StyledGridItem = styled(Grid)({
  height: "280px",
  background:
    "linear-gradient(90deg, rgba(11, 69, 179, 0.05) 0%, rgba(40, 139, 240, 0.05) 100%)",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "20px",
  margin: "20px",
  maxWidth: "280px",
  textAlign: "center",
});
