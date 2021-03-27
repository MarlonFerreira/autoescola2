import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  & form {
    padding: 20px;
    border: 1px solid rgba(111, 111, 111, 0.2);
    border-radius: 1%;
    background-color: white;
  }

  & button {
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 25px;
  }

  & input {
    font-size: 16px;
    border: none;
    transition: all 0.7s ease;
    -webkit-transition: all 0.7s ease;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary.main};
    outline: none;

    &:hover {
      transition: all 0.7s ease;
      -webkit-transition: all 0.7s ease;
      border-bottom: 1px solid #a9a9a9;
      left: 0;
    }

    &:focus {
      transition: all 0.7s ease;
      -webkit-transition: all 0.7s ease;
      border-bottom: 1px solid black;

      left: 0;
    }
  }
`;

export const MsgInputCheck = styled.div`
  color: red;
`;

export const Aviso = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: red;
  font-size: 0.8rem;
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const Campo = styled.p`
  margin: 50px 0 0 0;
`;

export const Observacao = styled.p``;

export const CriarConta = styled.span`
  text-decoration: none;
  color: blue;

  &:hover {
    transition: all 0.7s ease;
    -webkit-transition: all 0.7s ease;
    border-bottom: 1px solid #a9a9a9;
  }
`;

export default Root;
