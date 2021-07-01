import React, { useState } from "react";
import Header from "./components/Header";
import ThemeContext, { themes } from "./theme";
import Routes from "./routes/Routes";

function App() {
  const [theme, setTheme] = useState(themes.dark);
  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }

  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
