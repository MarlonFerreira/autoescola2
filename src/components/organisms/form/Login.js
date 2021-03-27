import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "components/atoms/button/Button";
import Root, {
  Title,
  Campo,
  CriarConta,
  Aviso,
} from "components/atoms/form/Form";

import { ajaxGetJson } from "../../../utils/ajax";

function initialLogin() {
  return { usuario: "", senha: "" };
}

const Login = () => {
  const [login, setLogin] = useState(initialLogin);
  const [estado, setEstado] = useState();

  async function handleChange(event) {
    const nam = event.target.name;
    const val = event.target.value;
    setLogin({ ...login, [nam]: val });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!login.usuario) return;
    else if (!login.senha) return;

    ajaxGetJson("http://localhost:8082/cliente", login).then((result) => {
      if (result.status === 200) {
        result.json().then(function (data) {
          console.log(data);
        });
        setEstado("Autenticado");
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
      {estado && <Aviso>{estado}</Aviso>}
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
    </>
    // </Container>
  );
};

export default Login;
