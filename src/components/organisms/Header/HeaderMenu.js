import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import styled from "styled-components";

import { BiCart, BiStar, BiDoorOpen } from "react-icons/bi";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;

  @media (min-width: 940px) {
    width: 35%;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;

  @media (min-width: 940px) {
    font-size: 1.8rem;
  }

  svg {
  }
`;

const Nome = styled.div`
  color: white;
`;

const HeaderMenu = () => {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("nome")) {
      setLogado(true);
      console.log(sessionStorage.getItem("nome"));
      setNome(sessionStorage.getItem("nome"));
    }
  }, []);

  return (
    <>
      <Root>
        {(!logado && (
          <Button as={Link} to={"/login"}>
            Entrar
          </Button>
        )) || (
          <Button as={Link} to={"/logout"}>
            Sair
          </Button>
        )}
        <Nome>{nome}</Nome>
        <Button as={Link} to={"/Favoritos"}>
          <BiStar />
        </Button>

        <Button as={Link} to={"/Carrinho"}>
          <BiCart />
        </Button>
      </Root>
    </>
  );
};

HeaderMenu.defaultProps = {
  logo: undefined,
  opcoes: [],
};

HeaderMenu.propTypes = {
  logo: PropTypes.node,
  opcoes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nome: PropTypes.string,
      slang: PropTypes.string,
    })
  ),
};

export default HeaderMenu;

// div div:nth-child(3) {
//   margin-left: auto;
// }

// {opcoes.map((opcao) => (
//   <Menu key={opcao.id}>
//     <Button as={Link} to={opcao.slang}>
//       {opcao.nome}
//     </Button>
//     <FaDoorOpen />
//   </Menu>
// ))}
