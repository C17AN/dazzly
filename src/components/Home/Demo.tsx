import React from "react";
import styled from "styled-components";
import demo1 from "../../assets/image/demo_image_1.jpg";
import SwiperCore, { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import shutter from "../../assets/icon/shutter.png";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([EffectCoverflow]);

const Demo = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect="coverflow"
      >
        <SwiperSlide>
          <ContentContainer>
            <ImageTitle>
              <img src={shutter} />
              <p className="photo-by-description">Photo By : C17AN</p>
            </ImageTitle>
            <ImageContainer>
              <img src={demo1} height={300} />
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
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <ImageTitle>
              <img src={shutter} />
              <p className="photo-by-description">Photo By : C17AN</p>
            </ImageTitle>
            <ImageContainer>
              <img src={demo1} height={300} />
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
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 2rem 0.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.6);
  width: 750px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  .photo-title {
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
    font-weight: 600;
  }
`;

const ImagePaletteContainer = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  .demo-palette-1-blue::after {
    content: " ";
    display: flex;
    background-color: #1d5491;
    width: 150px;
    height: 50px;
  }
  .demo-palette-1-orange_1::after {
    content: " ";
    display: flex;
    background-color: #e9ad83;
    width: 150px;
    height: 50px;
  }
  .demo-palette-1-orange_2::after {
    content: " ";
    display: flex;
    background-color: #82676a;
    width: 150px;
    height: 50px;
  }
  .demo-palette-1-orange_3::after {
    content: " ";
    display: flex;
    background-color: #a57466;
    width: 150px;
    height: 50px;
  }
  .demo-palette-1-black::after {
    content: " ";
    display: flex;
    background-color: #1d1c1b;
    width: 150px;
    height: 50px;
  }
  .demo-palette-1-green::after {
    content: " ";
    display: flex;
    background-color: #3b520a;
    width: 150px;
    height: 50px;
  }
`;

export default Demo;
