import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, setIsdarkMode] = useState(false);

  const toggleTheme = () => {
    setIsdarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
