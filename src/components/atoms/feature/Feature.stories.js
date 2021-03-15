import React from "react";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Grid from "../grid/Grid";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="Teste">
    <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar />} title="Maior e melhor frota">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Feature>
    <Feature icon={<FaKey />} title="Habilitação mais rápida">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Feature>
    <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Feature>
    <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Feature>
  </Grid>
);
