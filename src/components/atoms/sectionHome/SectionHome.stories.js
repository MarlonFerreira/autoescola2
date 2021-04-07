import React from "react";

import Grid from "../grid/Grid";
import SectionHome from "./SectionHome";

export default {
  title: "Components/Atoms/SectionHome",
  component: SectionHome,
};

export const usage = () => (
  <sectionHome title="Teste">
    <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </sectionHome>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <SectionHome title="Maior e melhor frota">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </SectionHome>
    <SectionHome title="Habilitação mais rápida">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </SectionHome>
    <SectionHome title="Excelente localização">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </SectionHome>
    <SectionHome title="Acessibilidade">
      <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </SectionHome>
  </Grid>
);
