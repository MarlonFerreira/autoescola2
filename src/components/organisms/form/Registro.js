import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import styled from "styled-components";
import Button from "components/atoms/button/Button";
import Root, {
  Title,
  Campo,
  Aviso,
  MsgInputCheck,
} from "components/atoms/form/Form";

import { ajaxPostJson } from "../../../utils/ajax";

const Modal = styled.div`
  display: ${(props) => props.display}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
`;

const Modalheader = styled.div`
  padding: 2px 16px;
  background-color: #ffc107;
  color: white;
`;

const Modalbody = styled.div`
  padding: 2px 16px;
  background-color: #f7f7f7;
  text-align: center;
`;

const Modalfooter = styled.div`
  padding: 2px 16px;
  background-color: #ffc107;
  color: white;
`;

function initialState() {
  return { nome: "", email: "", senha: "" };
}

const Registro = () => {
  const [dados, setDados] = useState(initialState);
  const [ativo, setAtivo] = useState(false);
  const [estado, setEstado] = useState();

  const [redirect, setRedirect] = useState(false);

  async function handleChange(event) {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  }

  async function Save() {
    setAtivo(true);
    if (!dados.nome) return;
    else if (!dados.email) return;
    else if (!dados.senha) return;

    await ajaxPostJson("http://localhost:8082/cliente", dados).then(
      (result) => {
        if (result.status === 201) {
          setEstado("Criado com sucesso.");
          setTimeout(function () {
            setRedirect(true);
          }, 1000);
        } else if (result.status === 422) {
          setEstado("Email já cadastrado.");
        } else if (result.status === 400) {
          setEstado("Preencha os dados corretamente.");
        } else {
          setEstado("Serviço indisponível.");
        }
      }
    );
  }

  return (
    <>
      {estado === "Criado com sucesso." && (
        <Modal display="true">
          <ModalContent>
            <Modalheader></Modalheader>
            <Modalbody>Criado com sucesso.</Modalbody>
            <Modalfooter></Modalfooter>
          </ModalContent>
        </Modal>
      )}
      {estado && <Aviso>{estado}</Aviso>}
      <Root>
        <form>
          <Title>Preencha os seus dados</Title>
          <label>
            <Campo>Nome</Campo>
            <input type="text" name="nome" onChange={handleChange} />
          </label>
          {ativo && !dados.nome && (
            <MsgInputCheck>Campo obrigatório.</MsgInputCheck>
          )}
          <label>
            <Campo>E-mail</Campo>
            <input type="text" name="email" onChange={handleChange} />
          </label>
          {ativo && estado === "Email já cadastrado." && (
            <MsgInputCheck>Email já cadastrado.</MsgInputCheck>
          )}
          {ativo && !dados.email && (
            <MsgInputCheck>Campo obrigatório.</MsgInputCheck>
          )}
          <label>
            <Campo>Senha</Campo>
            <input type="password" name="senha" onChange={handleChange} />
          </label>
          {ativo && !dados.senha && (
            <MsgInputCheck>Campo obrigatório.</MsgInputCheck>
          )}
          <div>
            <Button color="primary" onClick={Save}>
              Cadastrar
            </Button>
          </div>
        </form>
      </Root>
      {redirect && <Redirect to="/login" />}
    </>
  );
};

export default Registro;
