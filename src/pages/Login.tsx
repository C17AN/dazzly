import React from "react";
import styled from "styled-components";
import Input from "../common/Input";

interface Props {}

const Login = (props: Props) => {
  return (
    <Container>
      <LoginContainer>
        <Logo>일상 속의 색을 만나보세요</Logo>
        <Input></Input>
        <Input></Input>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding: 4rem;
  background: linear-gradient(35deg, #cdcdcd, #dba9a9);
  background-image: url("/image/login-background.jpg");
  background-size: contain;

  @media screen and (max-width: 768px) {
    & {
      padding: 2rem;
    }
  }
`;

const Logo = styled.div``;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #cdcdcd;
  background-color: white;
  width: 500px;
  height: 500px;
`;

export default Login;
