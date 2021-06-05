import React from "react";
import styled from "styled-components";
import Input from "../components/Login/Input";
import LogoIcon from "../assets/logo/logo.png";

interface Props {}

const Login = (props: Props) => {
  return (
    <Container>
      <LoginContainer>
        <Logo>
          <img src={LogoIcon} />
          <div>일상 속의 색을 만나보세요</div>
        </Logo>
        <Input placeholder={"아이디 또는 이메일"}></Input>
        <Input placeholder={"비밀번호"}></Input>
        <LoginButton service="kakao">카카오계정으로 로그인</LoginButton>
        <LoginButton service="google">Google 계정으로 로그인</LoginButton>
        <LoginButton>로그인</LoginButton>
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
  filter: blur(100%);
  background-image: url("/image/login-background.jpg");
  background-size: contain;

  @media screen and (max-width: 768px) {
    & {
      padding: 1.5rem;
      height: 700px;
      align-items: center;
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
  padding: 3rem;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 8px 32px 5px rgba(75, 78, 128, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 768px) {
    & {
      padding: 2rem;
      width: 100%;
      height: 100%;
    }
  }
`;

const LoginButton = styled.button<{ service?: string }>`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid #cdcdcd3d;
  border-radius: 4px;
  margin-top: 0.7rem;
  background-color: ${(props) => {
    if (props.service === "kakao") {
      return "#FEE500";
    }
    if (props.service === "google") {
      return "#f7f7f7";
    }
  }};
`;

export default Login;
