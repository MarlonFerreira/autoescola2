import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import Button from "components/atoms/button/Button";
import Root, {
  Title,
  Campo,
  CriarConta,
  Aviso,
  MsgInputCheck,
} from "components/atoms/form/Form";

import { ajaxGetJson } from "../../../utils/ajax";

function initialLogin() {
  return { usuario: "", senha: "" };
}

const Login = () => {
  const [dados, setDados] = useState(initialLogin);
  const [ativo, setAtivo] = useState(false);
  const [estado, setEstado] = useState();

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const nome = sessionStorage.getItem("nome");

    if (nome) setRedirect(true);
  }, []);

  async function handleChange(event) {
    const nam = event.target.name;
    const val = event.target.value;
    setDados({ ...dados, [nam]: val });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setAtivo(true);
    if (!dados.usuario) return;
    else if (!dados.senha) return;

    ajaxGetJson("http://localhost:8082/cliente", dados).then((result) => {
      if (result.status === 200) {
        result.json().then(function (data) {
          sessionStorage.setItem("nome", `${data.nome}`);
          setEstado("Autenticado");
          setRedirect(true);
        });
      } else if (result.status === 422) {
        setEstado("Email ou senha inválidos ");
      } else if (result.status === 400) {
        setEstado("Preencha os dados corretamente.");
      } else {
        setEstado("Serviço indisponível.");
      }
    });
  }

  return (
    // <Container>
    <>
      {redirect && <Redirect to="/" />}
      {estado && <Aviso>{estado}</Aviso>}
      <Root>
        <form onSubmit={handleSubmit}>
          <Title>Olá! Digite o seu e-mail e senha</Title>

          <label>
            <Campo>E-mail</Campo>
            <input
              type="text"
              name="usuario"
              value={dados.usuario}
              onChange={handleChange}
            />
          </label>
          {ativo && !dados.nome && (
            <MsgInputCheck>Campo obrigatório.</MsgInputCheck>
          )}
          <label>
            <Campo>Senha</Campo>
            <input
              type="password"
              name="senha"
              value={dados.senha}
              onChange={handleChange}
            />
          </label>
          {ativo && !dados.senha && (
            <MsgInputCheck>Campo obrigatório.</MsgInputCheck>
          )}
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
    </>
    // </Container>
  );
};

export default Login;
