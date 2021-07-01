import React, { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import ThemeContext, { themes } from "./theme";

function App() {
  const [theme, setTheme] = useState(themes.dark);
  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }

  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <Container />
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
