import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Modelo Limpo", async () => {
  render(<App />);
  expect(await screen.findByText(/Modelo Limpo/i)).toBeInTheDocument();
});
