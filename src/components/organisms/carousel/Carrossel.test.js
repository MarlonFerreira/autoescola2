import React from "react";
import { render, screen } from "test-utils";

import Carrossel from "./Carrossel";

import image1 from "assets/serv-01.jpg";

test("Carrossel - match snapshot", () => {
  const { asFragment } = render(<Carrossel></Carrossel>);

  expect(asFragment()).toMatchSnapshot();
});

// (If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).

test("Carrosel - Renderiza as imagens", async () => {
  const opcoes = [
    { id: 1, imagem: image1, legenda: "Imagem 1" },
    { id: 2, imagem: image1, legenda: "Imagem 2" },
    { id: 3, imagem: image1, legenda: "Imagem 3" },
    { id: 4, imagem: image1, legenda: "Imagem 4" },
    { id: 5, imagem: image1, legenda: "Imagem 5" },
    { id: 6, imagem: image1, legenda: "Imagem 6" },
  ];

  render(<Carrossel opcoes={opcoes}></Carrossel>);

  expect(await screen.getByText("Imagem 4")).toBeInTheDocument();
});
