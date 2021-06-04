import React from "react";
import styled from "styled-components";
import demo1 from "../assets/image/demo_image_1.jpg";
import shutter from "../assets/icon/shutter.png";

interface Props {}

const PhotoComponent = (props: Props) => {
  const ImageHeight = 200;

  return (
    <Container>
      <ContentContainer>
        <ImageTitle>
          <img src={shutter} />
          <p className="photo-by-description">Photo By : C17AN</p>
        </ImageTitle>
        <ImageContainer>
          <img src={demo1} width={200} height={120} />
          <ImagePaletteContainer>
            <div className="demo-palette-1-blue" />
            <div className="demo-palette-1-orange_1" />
            <div className="demo-palette-1-orange_2" />
            <div className="demo-palette-1-orange_3" />
            <div className="demo-palette-1-black" />
            <div className="demo-palette-1-green" />
          </ImagePaletteContainer>
        </ImageContainer>
        <p className="photo-title">행신, 늦은 봄의 노을</p>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 1rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 2rem 0.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 768px) {
    & {
      padding: 0.5rem 2rem 0.5rem 2rem;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  .photo-title {
    margin: 1rem 0 0.5rem 0;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  img {
    display: inline-block;
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 1rem;
  }
  .photo-by-description {
    font-size: 0.9rem;
    margin: 1rem 0.5rem;
    display: inline-block;
    font-weight: 300;
  }
`;

const ImagePaletteContainer = styled.div`
  width: 120px;
  height: auto;
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  .demo-palette-1-blue::after {
    content: " ";
    display: flex;
    background-color: #1d5491;
    width: 120px;
    height: 20px;
  }
  .demo-palette-1-orange_1::after {
    content: " ";
    display: flex;
    background-color: #e9ad83;
    width: 120px;
    height: 20px;
  }
  .demo-palette-1-orange_2::after {
    content: " ";
    display: flex;
    background-color: #82676a;
    width: 120px;
    height: 20px;
  }
  .demo-palette-1-orange_3::after {
    content: " ";
    display: flex;
    background-color: #a57466;
    width: 120px;
    height: 20px;
  }
  .demo-palette-1-black::after {
    content: " ";
    display: flex;
    background-color: #1d1c1b;
    width: 120px;
    height: 20px;
  }
  .demo-palette-1-green::after {
    content: " ";
    display: flex;
    background-color: #3b520a;
    width: 120px;
    height: 20px;
  }
`;

export default PhotoComponent;
