import React from "react";
import styled from "styled-components";
import Input from "../components/Login/Input";
import LogoIcon from "../assets/logo/logo.png";
import kakaoIcon from "../assets/icon/icon-kakao.png";

interface Props {}

const Login = (props: Props) => {
  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <Logo>
            <img src={LogoIcon} />
            <p>Dazzly</p>
          </Logo>
          <p className="logo-slogan">일상 속의 색을 만나보세요</p>
        </LogoContainer>
        <Input placeholder={"아이디 또는 이메일"}></Input>
        <Input placeholder={"비밀번호"} type="password"></Input>
        <LoginButton service="kakao">
          <img src={kakaoIcon} width={16} />
          카카오계정으로 로그인
        </LoginButton>
        {/* <LoginButton service="google">Google 계정으로 로그인</LoginButton> */}
        <LoginButton>로그인</LoginButton>
        <OptionContainer>
          <p className="register">대즐리 시작하기</p>
          <p>아이디 또는 비밀번호를 잊으셨나요?</p>
        </OptionContainer>
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

const LogoContainer = styled.div`
  margin-bottom: 2.5rem;
  .logo-slogan {
    margin-top: 1.2rem;
    text-align: center;
    font-family: "Noto Sans Kr";
    font-size: 0.9rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "SDSamliphopangche_Outline";
    font-size: 2rem;
    margin-left: 0.7rem;
  }
`;

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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
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
  img {
    margin-right: 0.5rem;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  font-size: 0.8rem;
  .register {
    padding-right: 1rem;
    border-right: 1px solid #cdcdcd;
    margin-right: 1rem;
  }
`;

export default Login;
