import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "components/atoms/button/Button";
import Root, { Title, Campo, CriarConta } from "components/atoms/form/CardForm";

import { ajaxGetJson } from "../../../utils/ajax";

function initialLogin() {
  return { usuario: "", senha: "" };
}

function initialDados() {
  return { token: "", nome: "" };
}

const Login = () => {
  const [login, setLogin] = useState(initialLogin);
  const [dados, setDados] = useState(initialDados);

  async function handleChange(event) {
    const nam = event.target.name;
    const val = event.target.value;
    setLogin({ ...login, [nam]: val });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!login.usuario) return;
    else if (!login.senha) return;

    ajaxGetJson("http://localhost:8082/cliente", {
      usuario: login.usuario,
      senha: login.senha,
    }).then((result) => {
      result.json().then((resultJSON) => {
        setDados(resultJSON).then(console.log(dados));
      });
    });
  }

  return (
    // <Container>
    <Root>
      <form onSubmit={handleSubmit}>
        <Title>Olá! Digite o seu e-mail e senha</Title>

        <label>
          <Campo>E-mail</Campo>
          <input
            type="text"
            name="usuario"
            value={login.usuario}
            onChange={handleChange}
          />
        </label>
        <label>
          <Campo>Senha</Campo>
          <input
            type="password"
            name="senha"
            value={login.senha}
            onChange={handleChange}
          />
        </label>
        <div>
          <Button type="submit" color="primary">
            Entrar
          </Button>
        </div>
        <CriarConta as={Link} to="/registro">
          Criar conta
        </CriarConta>
      </form>
    </Root>
    // </Container>
  );
};

export default Login;

{
  /* <style>.exemplo1 {
	display: inline-block;
	border: 1px dashed #000;
	padding: 10px;
	background: #ffffa2;
	height: 20px;
	opacity: 0.3;
	-moz-transition: height 1s ease-out, opacity 1s ease;
	-webkit-transition: height 1s ease-out, opacity 1s ease;
	-o-transition: height 1s ease-out, opacity 1s ease;
	transition: height 1s ease-out, opacity 1s ease;
}

.exemplo1:hover {
	height: 70px;
	opacity: 1;
}

.exemplo2 {
	position: relative;
	display: inline-block;
	border: 1px dashed #000;
	padding: 10px;
	background: #ffffa2;
	height: 20px;
	opacity: 0.3;
	margin: 0 0 0 20px;
	text-decoration: none;
	-moz-transition: all 1s ease;
	-webkit-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}

.exemplo2:hover {
	opacity: 1;
	-moz-transform: scale(2) rotate(30deg) translate(50px);
	-webkit-transform: scale(1.2) rotate(30deg) translate(50px);
	-o-transform: scale(2) rotate(30deg) translate(50px);
	transform: scale(2) rotate(30deg) translate(50px);
	z-index: 1000;
}

</style> */
}
