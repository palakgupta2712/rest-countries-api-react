import React, { createContext } from "react";

export const themes = {
  dark: {
    name: "dark",
    background: "var(--dark-blue)",
    color: "var(--white)",
    text: "hello",
  },
  light: {
    name: "light",
    background: "var(--white)",
    text: "hello",
  },
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
