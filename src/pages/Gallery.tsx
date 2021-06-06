import React from "react";
import styled from "styled-components";
import PhotoComponent from "../common/PhotoComponent";
import PhotoComponent2 from "../common/PhotoComponent2";

interface Props {}

const Gallery = (props: Props) => {
  return (
    <Container>
      <Title>갤러리 둘러보기</Title>
      <PhotoContainer>
        <PhotoComponent2 />
        <PhotoComponent2 />
        <PhotoComponent2 />
        <PhotoComponent2 />
        <PhotoComponent2 />
        <PhotoComponent2 />
      </PhotoContainer>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div`
  font-size: 1.6rem;
  padding: 2rem;
  font-family: "Noto Sans Kr";
  font-weight: 100;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Gallery;
