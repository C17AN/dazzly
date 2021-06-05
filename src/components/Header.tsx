import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import navbarIcon from "../assets/svg/navbar-icon.svg";
import { useSelector } from "react-redux";
import rootReducer from "../redux/reducer/index";

interface Props {}

const Header = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isSignedIn } = useSelector((state: any) => state.authReducer);
  return (
    <Container>
      <Logo>
        <img src={logo} />
        <Link to="/">
          <p>Dazzly</p>
        </Link>
      </Logo>
      <Nav>
        <img
          src={navbarIcon}
          className="navbar-icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        {isSignedIn ? (
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
              <li>마이페이지</li>
            </Link>
          </ul>
        ) : (
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
            <Link to="/signup">
              <li>시작하기</li>
            </Link>
          </ul>
        )}
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: sticky;
  z-index: 1;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 2rem;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
  }
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
  @media screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    img {
      width: 36px;
      height: 36px;
    }
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
  .navbar-icon {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      justify-content: center;
    }
    ul {
      position: fixed;
      right: -200%;
    }
    .navbar-icon {
      display: block;
      cursor: pointer;
      margin-right: 1rem;
    }
  }
`;

export default Header;
