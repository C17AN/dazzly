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
          <p className="photo-by-description">Photo By @C17AN</p>
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
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 768px) {
    & {
      padding: 0rem 1.5rem 0.5rem 1.5rem;
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
    border-radius: 4px;
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
    font-family: "Noto Sans KR";
    font-weight: 100;
  }

  @media screen and (max-width: 768px) {
    .photo-by-description {
      font-size: 0.8rem;
    }
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
    height: 20px;
  }
  .demo-palette-1-orange_1::after {
    content: " ";
    display: flex;
    background-color: #e9ad83;
    height: 20px;
  }
  .demo-palette-1-orange_2::after {
    content: " ";
    display: flex;
    background-color: #82676a;
    height: 20px;
  }
  .demo-palette-1-orange_3::after {
    content: " ";
    display: flex;
    background-color: #a57466;
    height: 20px;
  }
  .demo-palette-1-black::after {
    content: " ";
    display: flex;
    background-color: #1d1c1b;
    height: 20px;
  }
  .demo-palette-1-green::after {
    content: " ";
    display: flex;
    background-color: #3b520a;
    height: 20px;
  }
  @media screen and (max-width: 768px) {
    & {
      width: 80px;
    }
  }
`;

export default PhotoComponent;
