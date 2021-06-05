import React from "react";
import styled from "styled-components";
import LogoIcon from "../assets/logo/logo.png";

interface Props {}

const Footer = (props: Props) => {
  return (
    <Container>
      <Slogan>
        <Logo>
          <img src={LogoIcon} />
          <p className="title-dazzly">Dazzly</p>
        </Logo>
        <p>색, 그리고 일상.</p>
      </Slogan>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  display: flex;
  font-weight: 100;
  padding: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  img {
    width: 28px;
    height: 28px;
  }
  p {
    font-size: 24px !important;
    margin-left: 0.7rem;
  }
`;

const Slogan = styled.div`
  display: flex;
  flex-direction: column;

  .title-dazzly {
    font-family: "SDSamliphopangche_Outline";
  }
  p {
    text-align: right;
    font-size: 0.9rem;
  }
`;

export default Footer;
