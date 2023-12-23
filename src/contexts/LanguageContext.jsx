import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("");

  useEffect(() => {}, []);
  useEffect(() => {
    console.log("AS", language);
    if (!language) {
      if (localStorage.getItem("language")) {
        setLanguage(localStorage.getItem("language"));
      } else {
        setLanguage("en");
      }
    } else {
      if (localStorage.getItem("language") !== language) {
        window.location.reload()
        localStorage.setItem("language", language);
      }
    }
  }, [language]);

  const value = useMemo(
    () => ({ language: language, setLanguage }),
    [language, setLanguage]
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const data = useContext(LanguageContext);
  if (data === null) {
    throw Error("Missing Provider");
  }
  return data;
};
