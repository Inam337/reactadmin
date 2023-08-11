import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as React from "react";
import MainLayout from "./components/layout/MainLayout";
import { ThemeContext, Theme } from "./components/layout/ThemeContext";
import { routes } from "./routes";
import { CssBaseline } from "@mui/material";
const App: React.FC = () => {
  const [theme, setTheme] = React.useState(Theme.Dark);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {routes}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
