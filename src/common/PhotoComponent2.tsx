import React from "react";
import styled from "styled-components";
import demo2 from "../assets/image/demo_image_2.jpg";
import CircledColor from "./CircledColor";

interface Props {}

const PhotoComponent2 = (props: Props) => {
  return (
    <Container>
      <ImageContainer src={demo2}></ImageContainer>
      <ImageInfo>
        <Title>오늘은 날이 너무 좋았다. 어쩌면,</Title>
        <ColorContainer>
          <CircledColor size={20} color={"#4FCAA5"} />
          <CircledColor size={20} color={"#074058"} />
          <CircledColor size={20} color={"#EBECF1"} />
          <CircledColor size={20} color={"#305D97"} />
          <CircledColor size={20} color={"#1BBDBE"} />
          <CircledColor size={20} color={"#857B73"} />
          <CircledColor size={20} color={"#366480"} />
          <CircledColor size={20} color={"#084356"} />
        </ColorContainer>
      </ImageInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  margin: 0 1.5rem;
`;

const Title = styled.p`
  font-family: "Noto Sans Kr";
  font-weight: 100;
  font-size: 12px;
  margin-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-
`;

const ImageContainer = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ImageInfo = styled.div`
  background-color: rgba(240, 240, 240, 0.7);
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding-left: 1rem;
  height: 50px;
  position: relative;
  bottom: 50px;
  width: 100%;
`;

const ColorContainer = styled.div`
  display: flex;
  margin-right: 1rem;
`;

export default PhotoComponent2;
