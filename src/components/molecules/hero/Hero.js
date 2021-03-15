import React from "react";
import PropTypes from "prop-types";

import Container from "components/atoms/Container";
import styled, { css } from "styled-components";
// import { breakAt, BreakpointsSizes } from "../../styles/Breakpoints";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  height: 450px;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  display: inline-block;

  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }
  ul {
    list-style: none;
    padding-left: 0px;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${(props) => props.theme.colors.primary.main};
    }
  }
`;

// const Container = styled.div`
//   width: 100%;
//   padding: 0 8px;

//   ${breakAt(BreakpointsSizes.sm)} {
//     padding: 0 16px;
//   }

//   ${breakAt(BreakpointsSizes.lg)} {
//     /* width: 1140px; */
//     width: 950px;
//     padding: 0 16px;
//     margin: 0 auto;
//   }

//   ${breakAt(BreakpointsSizes.xl)} {
//     width: 1140px;
//     padding: 0 16px;
//     margin: 0 auto;
//   }
// `;

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,

  /**
   * Background image
   */
  // image: PropTypes.string.isRequired,
  // title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // children: PropTypes.node,
};

// Hero.defaultProps = {
//   title: "Meu titulo",
// };

export default Hero;
