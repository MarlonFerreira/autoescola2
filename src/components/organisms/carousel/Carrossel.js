import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #fff;
  /* padding: 100px 0; */
  height: auto;
`;

const Carrossel = ({ number, imagens }) => {
  return (
    <>
      <Root>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          centerMode
          centerSlidePercentage={number}
          autoPlay={true}
          transitionTime={500}
          interval={10000}
          statusFormatter={(current, total) => ``}
        >
          {imagens.map((imagem) => (
            <div key={imagem.id}>
              <img src={imagem.imagem} alt={imagem.legenda} />
              <p className="legend">{imagem.legenda}</p>
            </div>
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
