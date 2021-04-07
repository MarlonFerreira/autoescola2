import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  /* background-color: #131921; */
`;

const Header = () => <Root>ds</Root>;

// background-color: ${(props) => props.theme.colors.primary.main};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
