import React from "react";

import Header from "components/organisms/Header/Header";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer/Footer";
import Login from "components/organisms/form/Login";
import FooterInferior from "components/organisms/footerInferior/FooterInferior";

import Logo from "draws/Logo";

const headerMenu = [
  { id: 1, nome: "Serviços", slang: "servicos" },
  { id: 2, nome: "Contato", slang: "contato" },
  { id: 3, nome: "Entrar", slang: "login" },
];

const Home = () => (
  <>
    <Header logo={<Logo />} opcoes={headerMenu} />
    <Section inverse>
      <Login />
    </Section>

    <Footer />
    <FooterInferior logo={<Logo />} />
  </>
);

export default Home;
