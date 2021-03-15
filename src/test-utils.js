import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "styles/themeProvider/ThemeProvider";
import { MemoryRouter as Router } from "react-router-dom";

const TesteProvider = ({ children }) => (
  <Router>
    <ThemeProvider>{children}</ThemeProvider>
  </Router>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TesteProvider, ...options });

export { customRender as render };
