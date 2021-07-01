import React, { createContext } from "react";

export const themes = {
  dark: {
    name: "dark",
    background: "hsl(209, 23%, 22%)",
    color: "hsl(0, 0%, 100%)",
    bg: "hsl(207, 26%, 17%)",
  },
  light: {
    name: "light",
    background: "hsl(0, 0%, 100%)",
    color: "hsl(200, 15%, 8%)",
    bg: "hsl(0, 0%, 98%)",
  },
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
