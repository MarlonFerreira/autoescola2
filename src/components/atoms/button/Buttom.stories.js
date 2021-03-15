import React from "react";
import { actions } from "@storybook/addon-actions";

import Buttom from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Button",
  component: Buttom,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Buttom {...props} {...events}>
        Default
      </Buttom>
      <Buttom color="primary" {...props} {...events}>
        Primary
      </Buttom>
      <Buttom color="danger" {...props} {...events}>
        Danger
      </Buttom>
    </Toolbar>
    <p>As a link:</p>
    <Toolbar>
      <Buttom as="a" href="#" {...props} {...events}>
        Default
      </Buttom>
      <Buttom as="a" href="#" color="primary" {...props} {...events}>
        Primary
      </Buttom>
      <Buttom as="a" href="#" color="danger" {...props} {...events}>
        Danger
      </Buttom>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Buttom disabled {...props} {...events}>
        Default
      </Buttom>
      <Buttom color="primary" disabled {...props} {...events}>
        Primary
      </Buttom>
      <Buttom color="danger" disabled {...props} {...events}>
        Danger
      </Buttom>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;
