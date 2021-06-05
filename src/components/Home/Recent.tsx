import React from "react";
import styled from "styled-components";
import PhotoComponent from "../../common/PhotoComponent";
import newIcon from "../../assets/icon/new.png";

interface Props {}

const Recent = (props: Props) => {
  return (
    <Container>
      <Title>
        <img src={newIcon} />
        <h3>새로 추가된 팔레트</h3>
      </Title>

      <PhotoContainer>
        <PhotoComponent />
        <PhotoComponent />
        <PhotoComponent />
        <PhotoComponent />
        <PhotoComponent />
        <PhotoComponent />
      </PhotoContainer>
      <MoreButton>더 보러가기</MoreButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  position: relative;
  z-index: 1;
  background-color: rgb(247, 242, 245);
  display: flex;
  flex-direction: column;
  backdrop-filter: opacity(0%);

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  padding: 1.5em;
  display: flex;
  align-items: center;
  img {
    height: 1.5rem;
    margin-right: 10px;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 100;
  }
  @media screen and (max-width: 768px) {
    & {
      padding: 0.5rem;

      h3 {
        font-size: 1.2rem;
      }
    }
  }
`;

const MoreButton = styled.button`
  font-size: 1.1rem;
  transition: 0.2s ease-in-out;
  padding: 10px;
  margin: 1rem 1.5rem;
  border-radius: 8px;
  background-color: #ffffffda;
  border-color: transparent;
  border: 2px solid #cdcdcd;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    border: 2px solid #40ce80;
    color: #40ce80;
  }
`;

export default Recent;
