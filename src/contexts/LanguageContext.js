import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLangugage] = useState("french");
  const changeLanguage = e => {
    if (e.target.value) setLangugage(e.target.value);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
