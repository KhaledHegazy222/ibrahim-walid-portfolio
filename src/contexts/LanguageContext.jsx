import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("language") !== language) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage }),
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
