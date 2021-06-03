import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

interface Props {}

const Header = (props: Props) => {
  return (
    <Container>
      <Logo>
        <img src={logo} width={48} height={48} />
        <Link to="/">
          <p>Dazzly</p>
        </Link>
      </Logo>
      <Nav>
        <ul>
          <Link to="/palette">
            <li>내 팔레트 관리</li>
          </Link>
          <Link to="/gallery">
            <li>팔레트 갤러리</li>
          </Link>
          <Link to="/competition">
            <li>팔레트 월드컵</li>
          </Link>
          <Link to="setting">
            <li>설정</li>
          </Link>
        </ul>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  font-family: "Coming Soon";
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 2rem;
  align-items: center;
  a {
    text-decoration: none;
    color: #333;
  }
  p {
    font-size: 1.5rem;
    font-family: "SDSamliphopangche_Outline";
    font-weight: bold;
    color: #333;
    margin-left: 1rem;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    margin-right: 2rem;
    a {
      text-decoration: none;
      color: #333;
    }
    li {
      margin: 0 1.5rem;
      font-family: "KyoboHand";
      font-size: 1.1rem;
    }
  }
`;

export default Header;
