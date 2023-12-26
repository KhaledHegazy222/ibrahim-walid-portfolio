import downArrows from "../../../assets/downArrows.svg";
import details1 from "../../../assets/details1.svg";
import details2 from "../../../assets/details2.svg";
import details3 from "../../../assets/details3.svg";
import { List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { StyledSection } from "../../About/About.styled";
import { useLanguage } from "../../../contexts/LanguageContext";
import contentData from "../../../assets/content.json";
const images = [details1, details2, details3];

// eslint-disable-next-line react/prop-types
const Details = ({ title, content: pageDetails }) => {
  const { language } = useLanguage();
  const content = contentData[language].details;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledSection>
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "700",
          textAlign: "center",
          padding: "40px",
          marginBottom: "40px",
          background: "linear-gradient(90deg, #0B45B3 0%, #288BF0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {pageDetails}
      </p>
      <img
        src={downArrows}
        style={{
          display: "block",
          margin: "80px auto",
        }}
      />
      <List
        sx={{
          display: "flex",
          gap: "30px",
        }}
      >
        {content.map(({ title, description }, index) => (
          <ListItem
            key={index}
            sx={{
              background: "linear-gradient(90deg,#e0ecfb,#edf2fa)",
              padding: "40px",
              borderRadius: "8px",
              display: "block",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <img
                src={images[Math.floor(Math.random() * 3)]}
                style={{ width: "32px", height: "32px" }}
              />
              <h4 style={{ fontSize: "24px" }}>{title}</h4>
            </div>
            <p
              style={{
                textAlign: "start",
                fontWeight: "500",
                fontSize: "16px",
                marginTop: "16px",
              }}
            >
              {description}
            </p>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

export default Details;
