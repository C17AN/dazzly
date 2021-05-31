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
      <Nav>
        <ul>
          <li>내 팔레트 관리</li>
          <li>팔레트 갤러리</li>
          <li>팔레트 월드컵</li>
          <li>설정</li>
        </ul>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
  display: flex;
  border-bottom: 1px solid #cdcdcd;
  justify-content: space-between;
  font-family: "Coming Soon";
`;

const Logo = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-evenly;
  margin-left: 1.5rem;
  align-items: center;
  p {
    font-size: 1.3rem;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    margin-right: 2rem;
    li {
      margin: 0 1.5rem;
      font-family: "KyoboHand";
      font-size: 1.1rem;
    }
  }
`;

export default Header;
