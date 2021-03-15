import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { breakAt, BreakpointsSizes } from "styles/breakpoints/Breakpoints";

const breakColumnAt = (size) => (props) =>
  props[size] &&
  css`
    ${breakAt(BreakpointsSizes[size])} {
      grid-template-columns: repeat(${(props) => props[size]}, 1fr);
    }
  `;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakColumnAt("sm")}
  ${breakColumnAt("md")}
  ${breakColumnAt("lg")}
  ${breakColumnAt("xl")}
  ${breakColumnAt("xxl")}
`;

Grid.defaultProps = {
  sm: PropTypes.undefined,
  md: PropTypes.undefined,
  lg: PropTypes.undefined,
  xl: PropTypes.undefined,
  xxl: PropTypes.undefined,
};

Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
};

export default Grid;
