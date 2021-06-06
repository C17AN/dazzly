import React from "react";
import styled from "styled-components";
import PhotoComponent from "../common/PhotoComponent";
import PhotoComponent2 from "../common/PhotoComponent2";

interface Props {}

const Gallery = (props: Props) => {
  return (
    <Container>
      <TitleContainer>
        <Title>갤러리 둘러보기</Title>
        <Search>
          <SearchTag placeholder="검색할 태그를 입력하세요"></SearchTag>
          <SearchButton>검색</SearchButton>
        </Search>
      </TitleContainer>
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0 1rem 0;
  }
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-family: "Noto Sans Kr";
  font-weight: 100;
`;

const Search = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    align-self: flex-end;
    width: 100%;
    padding: 2rem 1rem 1rem 1rem;
  }
`;

const SearchTag = styled.input`
  padding: 0.5rem;
  &::placeholder {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    flex: 2;
  }
`;

const SearchButton = styled.button`
  cursor: pointer;
  padding: 0 1rem;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Gallery;
