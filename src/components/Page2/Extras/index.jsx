import extras1 from "../../../assets/extras1.svg";
import extras2 from "../../../assets/extras2.svg";
const Extras = () => {
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
            أهمية تصميم شعار لمنتجك
          </h3>
          <ul
            style={{
              fontWeight: "500",
              fontSize: "18px",
              padding: "0 20px",
            }}
          >
            <li>
              يوفر لك التطبيق يوفر لك التطبيق إمكانية الوصول إلى عملاء جدد.
            </li>
            <li>
              يقدم لك خاصية &quot;إرسال الإشعارات&quot; ويضمن لك سهولة الوصول
              إلى العملاء.
            </li>
            <li>
              يمكنك التطبيق من التواصل المباشر مع العملاء من خلال خدمة المحادثة.
            </li>
            <li>
              يوفر الكثير من التكاليف التي يتم صرفها على الحملات الإعلانية.
            </li>
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
            المميزات التي تحصل عليها عند تصميم شعار
          </h3>
          <ul
            style={{
              fontWeight: "500",
              fontSize: "18px",
              padding: "0 20px",
            }}
          >
            <li>
              يوفر لك التطبيق يوفر لك التطبيق إمكانية الوصول إلى عملاء جدد.
            </li>
            <li>
              يقدم لك خاصية &quot;إرسال الإشعارات&quot; ويضمن لك سهولة الوصول
              إلى العملاء.
            </li>
            <li>
              يمكنك التطبيق من التواصل المباشر مع العملاء من خلال خدمة المحادثة.
            </li>
            <li>
              يوفر الكثير من التكاليف التي يتم صرفها على الحملات الإعلانية.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Extras;
