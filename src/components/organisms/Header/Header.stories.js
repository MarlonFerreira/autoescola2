import React from "react";

import Header from "./HeaderTop";

import Logo from "draws/Logo";

export default {
  title: "Components/organisms/Header",
  component: Header,
};

const opcoes = [
  { id: 1, nome: "Serviços", slang: "servicos" },
  { id: 2, nome: "Contato", slang: "contato" },
  { id: 3, nome: "Entrar", slang: "entrar" },
];

export const usage = () => <Header logo={<Logo />} opcoes={opcoes}></Header>;
