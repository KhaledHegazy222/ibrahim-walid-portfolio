import downArrows from "../../../assets/downArrows.svg";
import details1 from "../../../assets/details1.svg";
import details2 from "../../../assets/details2.svg";
import details3 from "../../../assets/details3.svg";
import { Box, List, ListItem } from "@mui/material";
const detailsList = [
  {
    image: details1,
    title: "أفكار إبداعية",
    content:
      "أفكار إبداعية مبتكرة تتميز بالحصرية والانفراد تساعدك على كسب ثقة العملاء.",
  },
  {
    image: details2,
    title: "أفكار إبداعية",
    content: "دقة عالية في عمل تحليلات الأسواق ودراسة المنافسين.",
  },
  {
    image: details3,
    title: "أفكار إبداعية",
    content:
      "سرعة في تصميم العلامة التجارية وتصميم الهوية البصرية مع مراعاة جودة التصميم.",
  },
];

// eslint-disable-next-line react/prop-types
const Details = ({ title, content }) => {
  return (
    <Box
      sx={{
        padding: "120px",
        "& > *": {
          direction: "rtl",
        },
      }}
    >
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
        {content}
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
        {detailsList.map(({ image, title, content }) => (
          <ListItem
            key={title}
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
                gap: "8px",
              }}
            >
              <img src={image} style={{ width: "32px", height: "32px" }} />
              <h4 style={{ fontSize: "24px" }}>{title}</h4>
            </div>
            <p
              style={{
                textAlign: "right",
                fontWeight: "500",
                fontSize: "16px",
                marginTop: "16px",
              }}
            >
              {content}
            </p>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Details;
