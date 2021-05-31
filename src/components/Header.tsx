import React from "react";
import styled from "styled-components";
import logo from "../assets/logo/logo.png";

interface Props {}

const Header = (props: Props) => {
  return (
    <Container>
      <Logo>
        <img src={logo} width={48} height={48} />
        <p>Colorful.io</p>
      </Logo>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
  display: flex;
  border-bottom: 1px solid #cdcdcd;
  font-family: "Coming Soon";
`;

const Logo = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-evenly;
  align-items: center;
  p {
    font-size: 1.3rem;
  }
`;

const Color1 = styled.div`
  background-color: #cdcdcd;
  flex: 1;
`;
const Color2 = styled.div`
  background-color: red;
  flex: 1;
`;
const Color3 = styled.div`
  background-color: #8f5d5d;
  flex: 1;
`;
const Color4 = styled.div`
  background-color: #d8cdcd;
  flex: 1;
`;

export default Header;
