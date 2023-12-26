import extras1 from "../../../assets/extras1.svg";
import extras2 from "../../../assets/extras2.svg";
import { useLanguage } from "../../../contexts/LanguageContext";
import contentData from "../../../assets/content.json";
const Extras = () => {
  const { language } = useLanguage();
  const content = contentData[language].extras;
  return (
    <div
      style={{
        padding: "120px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          borderRadius: "8px",
          padding: "40px",
          margin: "50px 0",
          background: "linear-gradient(90deg,#288BF000, #eaf4fd)",
        }}
      >
        <img src={extras1} />
        <div>
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            {content.section1.title}
          </h3>
          <ul
            style={{
              fontWeight: "500",
              fontSize: "18px",
              padding: "0 20px",
            }}
          >
            {content.section1.content.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "8px",
          padding: "40px",
          margin: "50px 0",
          background: "linear-gradient(90deg,#eaf4fd,#288BF000)",
        }}
      >
        <img src={extras2} />
        <div>
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            {content.section2.title}
          </h3>
          <ul
            style={{
              fontWeight: "500",
              fontSize: "18px",
              padding: "0 20px",
            }}
          >
            {content.section2.content.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Extras;
