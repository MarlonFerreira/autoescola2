import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";

// import Grid from "components/atoms/grid/Grid";
// import Button from "components/atoms/button/Button";

const Container = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  background-color: #131921;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media (min-width: 940px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;

  svg {
    width: 250px;
    height: auto;
    max-height: 100px !important;
    max-width: 280px;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 940px) {
    width: 50%;
  }

  input {
    width: 90%;
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }
`;

const Header = ({ logo }) => (
  <>
    <Container>
      {/* <Grid> */}
      <Logo as={Link} to="/">
        {logo}
      </Logo>
      <Input>
        <input type="text" />
      </Input>
      <HeaderMenu />
      {/* </Grid> */}
    </Container>
  </>
);

Header.defaultProps = {
  logo: undefined,
  opcoes: [],
};

Header.propTypes = {
  logo: PropTypes.node,
  opcoes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nome: PropTypes.string,
      slang: PropTypes.string,
    })
  ),
};

export default Header;

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

// const Grid = styled.div`
//   display: grid;
//   grid-column-gap: 16px;
//   grid-row-gap: 16px;
//   grid-template-columns: 1fr 1fr;

//   /* grid-template-columns: repeat(4, 1fr); */

//   @media (min-width: ${BreakpointsSizes.sm}px) {
//     grid-template-columns: 1fr 5fr 1fr 1fr 1fr;
//   }

//   @media (min-width: ${BreakpointsSizes.md}px) {
//     grid-template-columns: 1fr 5fr 1fr 1fr 1fr;
//   }

//   @media (min-width: ${BreakpointsSizes.lg}px) {
//     grid-template-columns: 1fr 5fr 2fr 2fr 2fr;
//   }
// `;
