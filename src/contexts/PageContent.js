import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function PageContext(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{props.children}</div>;
}
