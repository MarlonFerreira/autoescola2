import React from "react";
import { render, screen } from "test-utils";

import Header from "./Header";

const opcoes = [
  { id: 1, nome: "Serviços", slang: "servicos" },
  { id: 2, nome: "Contato", slang: "contato" },
  { id: 3, nome: "Área do cliente", slang: "area-do-cliente" },
];

test("Renderiza o header", () => {
  const { getByText } = render(<Header opcoes={opcoes} />);

  expect(getByText("Contato")).toBeInTheDocument();
});
