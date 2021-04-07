import React from "react";
import styled from "styled-components";

import Grid from "components/atoms/grid/Grid";
import Container from "components/atoms/Container";

import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Root = styled.footer`
  /* display: flex; */
  /* background-color: #2a2a2a; */
  background-color: #131921;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  /* display: block; */
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    /* &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      background-color: ${(props) => props.theme.colors.primary.main};
      height: 5px;
      width: 70px;
    } */
  }

  h1 {
    padding-bottom: 25px;
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Revendedora</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            corporis illo nulla. Non, illo, deserunt aperiam maxime, culpa
            pariatur tempora dolorum ipsam esse quaerat eaque obcaecati
            quibusdam eveniet rem exercitationem?
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (14) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            corporis illo nulla.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="https://www.facebook.com">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="https://www.linkedin.com">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              LinkedIn
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="https://www.twitter.com">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
