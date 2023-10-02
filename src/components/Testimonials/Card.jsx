import { PropTypes } from "prop-types";

import { Box, Rating, Typography } from "@mui/material";
import {
  StyledCardBody,
  StyledCardTitle,
  StyledHiddenCard,
  StyledLeftCard,
  StyledMiddleCard,
  StyledRightCard,
} from "./Card.styled";

const Card = ({ img, title, content, ratingValue, position }) => {
  const cardBody = (
    <StyledCardBody>
      <Box>
        <img src={img} />
      </Box>

      <Box>
        <Rating value={ratingValue} readOnly />
        <Typography>{content}</Typography>
        <StyledCardTitle component="h4">{title}</StyledCardTitle>
      </Box>
    </StyledCardBody>
  );
  return position === "Left" ? (
    <StyledLeftCard>{cardBody}</StyledLeftCard>
  ) : position === "Right" ? (
    <StyledRightCard>{cardBody}</StyledRightCard>
  ) : position === "Middle" ? (
    <StyledMiddleCard>{cardBody}</StyledMiddleCard>
  ) : (
    <StyledHiddenCard>{cardBody}</StyledHiddenCard>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  ratingValue: PropTypes.number.isRequired,
  position: PropTypes.string,
};

export default Card;
