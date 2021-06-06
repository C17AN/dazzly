import React, { useState } from "react";
import styled from "styled-components";
import demo2 from "../assets/image/demo_image_2.jpg";
import CircledColor from "./CircledColor";
import ModalPortal from "./ModalPortal";

interface Props {}

const PhotoComponent2 = (props: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Container onClick={() => setModalIsOpen(true)}>
        <ImageContainer src={demo2} />
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
      <ModalPortal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <ModalContainer>
          <ImageContainer src={demo2} className="modal-image-container" />
          <ContentContainer>
            <ContentTitle>오늘은 날이 너무 좋았어!</ContentTitle>
          </ContentContainer>
        </ModalContainer>
      </ModalPortal>
    </>
  );
};

const Container = styled.div`
  width: 400px;
  margin: 0 1.5rem;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.p`
  font-family: "Noto Sans Kr";
  font-weight: 100;
  font-size: 12px;
  margin-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ImageContainer = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    box-shadow: 3px 3px 10px #333;
  }
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
  bottom: 52px;
  width: 100%;
`;

const ColorContainer = styled.div`
  display: flex;
  margin-right: 1rem;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  .modal-image-container {
    flex: 2;
    width: 0px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .modal-image-container {
      flex: 2;
      width: 100%;
    }
  }
`;

const ContentContainer = styled.div`
  width: 300px;
  flex: 1;
`;

const ContentTitle = styled.p``;

export default PhotoComponent2;
