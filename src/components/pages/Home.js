import React from "react";

import Hero from "components/molecules/hero/Hero";
import HeaderTop from "components/organisms/Header/HeaderTop";
import Header from "components/organisms/Header/Header";

import Carrossel from "components/organisms/carousel/Carrossel";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer/Footer";
import FooterInferior from "components/organisms/footerInferior/FooterInferior";
import Grid from "components/atoms/grid/Grid";
import Heading from "components/atoms/heading/Heading";
import Feature from "components/atoms/feature/Feature";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Logo from "draws/Logo";
import BgHighwayImage from "../../stories/assets/bg-highway.jpg";
import image1 from "assets/hero.jpg";
import image2 from "assets/serv-01.jpg";
import image3 from "assets/serv-02.jpg";

const imagensCarrosel = [
  { id: 1, imagem: image1, legenda: "Imagem 1" },
  { id: 2, imagem: image2, legenda: "Imagem 2" },
  { id: 3, imagem: image3, legenda: "Imagem 3" },
];

const Home = () => (
  <>
    <HeaderTop logo={<Logo />} />
    <Header />

    <Hero image={BgHighwayImage}></Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Lorem ipsum dolor sit amet">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Lorem ipsum dolor sit amet">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Lorem ipsum dolor sit amet">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Lorem ipsum dolor sit amet">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Lorem ipsum</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            earum consequatur dolor esse similique maiores vel ipsa voluptatem
            neque nulla perferendis fugiat reiciendis illo consectetur
            voluptates, nemo, aspernatur minus fuga!
          </p>
        </div>
        <div>
          <Carrossel imagens={imagensCarrosel} />
        </div>
      </Grid>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            earum consequatur dolor esse similique maiores vel ipsa voluptatem
            neque nulla perferendis fugiat reiciendis illo consectetur
            voluptates, nemo, aspernatur minus fuga!
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            earum consequatur dolor esse similique maiores vel ipsa voluptatem
            neque nulla perferendis fugiat reiciendis illo consectetur
            voluptates, nemo, aspernatur minus fuga!
          </p>
        </div>
      </Grid>
    </Section>
    <Footer />
    <FooterInferior logo={<Logo />} />
  </>
);

export default Home;
