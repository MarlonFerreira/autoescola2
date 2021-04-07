import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Root = styled.div`
  width: 100%;
`;

const Container = styled.div`
  height: 250px;
`;

const Image = styled.img`
  height: 100%;
`;

const Carrossel = ({ number, imagens }) => {
  return (
    <>
      <Root>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          // centerMode
          centerSlidePercentage={number}
          autoPlay={true}
          transitionTime={500}
          interval={10000}
          width={"100%"}
          dynamicHeight={false}
          statusFormatter={(current, total) => ``}
        >
          {imagens.map((imagem) => (
            <Container key={imagem.id}>
              <Image src={imagem.imagem} alt={imagem.legenda} />
              {/* <p className="legend">{imagem.legenda}</p> */}
            </Container>
          ))}
        </Carousel>
      </Root>
    </>
  );
};

Carrossel.defaultProps = {
  number: 100,
  imagens: [],
};

Carrossel.propTypes = {
  number: PropTypes.number,
  imagens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      imagem: PropTypes.string,
      legenda: PropTypes.string,
      slang: PropTypes.string,
    })
  ),
};

export default Carrossel;
