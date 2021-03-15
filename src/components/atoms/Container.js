import PropTypes from "prop-types";
import styled from "styled-components";
import {
  breakAt,
  BreakpointsSizes,
} from "../../styles/breakpoints/Breakpoints";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointsSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointsSizes.lg)} {
    /* width: 1140px; */
    max-width: 1140px;
    /* width: 950px; */
    /* width: 100%; */
    /* padding: 0 16px; */
    /* padding: 0; */
    margin: 0 auto;
  }
`;

Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
