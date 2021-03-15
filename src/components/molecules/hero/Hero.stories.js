import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import Heading from "../../atoms/heading/Heading";
import Button from "../../atoms/button/Button";

import BgHighwayImage from "../../../stories/assets/bg-highway.jpg";
import BgCarImage from "../../../stories/assets/bg-car.jpg";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação.")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>A auto escola lider em aprovação 1.</li>
      <li>A auto escola lider em aprovação 2.</li>
      <li>A auto escola lider em aprovação 3.</li>
    </ul>
    <Button color="primary" variant="outlined">
      Matricule-se agora
    </Button>
  </Hero>
);
