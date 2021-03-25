import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "components/atoms/grid/Grid";
import { breakAt, BreakpointsSizes } from "styles/breakpoints/Breakpoints";
import Button from "components/atoms/button/Button";

const LogoContainer = styled.div`
  text-align: center;
  svg {
    width: 100px;
    height: auto;
    max-width: 280px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const Root = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  /* background-color: ${(props) => props.theme.colors.primary.main}; */

  & h5 {
    margin: 16px 0;
    min-height: 3.12rem;

    ${breakAt(BreakpointsSizes.lg)} {
      min-height: 3.9rem;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  /* background-color: red; */
`;

const Header = ({ logo, opcoes }) => (
  <Root>
    <Grid md={4} sm={2}>
      <LogoContainer as={Link} to="/">
        {logo}
      </LogoContainer>
      {opcoes.map((opcao) => (
        <Menu key={opcao.id}>
          <Button variant="linkBlack" as={Link} to={opcao.slang}>
            {opcao.nome}
          </Button>
        </Menu>
      ))}
    </Grid>
  </Root>
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
