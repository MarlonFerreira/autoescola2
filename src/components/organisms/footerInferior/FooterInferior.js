import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary.main};
  color: black;
  max-height: 100px;
  /* padding: 40px 0; */

  svg {
    width: 100px;
    height: 50px;
    max-width: 280px;
    /* color: ${(props) => props.theme.colors.primary.main}; */
  }
`;

const FooterInferior = ({ logo }) => (
  <Root>
    {logo}
    <div>@ 2021 Revendedora</div>
  </Root>
);

FooterInferior.defaultProps = {
  logo: undefined,
};

FooterInferior.propTypes = {
  logo: PropTypes.node,
};

export default FooterInferior;
