import whatsappOutlined from "../../../assets/whatsappOutlined.svg";
const Consultation = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg,#0B45B3, #288BF0)",
        color: "white",
        textAlign: "center",
        height: "480px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "20px" }}>
        Get Free Consultation
      </h2>
      <a
        style={{
          background: "#25D366",
          borderRadius: "32px",
          padding: "8px 40px",
          fontSize: "18px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img src={whatsappOutlined} /> Contact us
      </a>
    </div>
  );
};

export default Consultation;
