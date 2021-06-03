import styled from "styled-components";
import demo1 from "../assets/image/demo_image_1.jpg";

const Home = () => {
  return (
    <Container>
      <Description>
        <h2>오늘의 나는, 과연 어떤 색일까?</h2>
        <p>여러분의 색감을 아낌없이 어필해 보세요!</p>
        <p>색으로 표현하는 SNS, 대즐리</p>
      </Description>
      <ImageContainer>
        <img src={demo1} width={500} />
        <ImagePaletteContainer>
          <div className="demo-palette-1-blue" />
          <div className="demo-palette-1-orange_1" />
          <div className="demo-palette-1-orange_2" />
          <div className="demo-palette-1-black" />
          <div className="demo-palette-1-green" />
        </ImagePaletteContainer>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 1.4rem;
    margin: 1rem 0;
  }
`;

const Description = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  img {
    display: inline-block;
  }
`;

const ImagePaletteContainer = styled.div`
  width: 100px;
  .demo-palette-1-blue::after {
    content: " ";
    display: block;
    background-color: #190e49;
    height: 150px;
  }
  .demo-palette-1-orange_1::after {
    content: " ";
    display: block;
    background-color: #d88639;
    height: 150px;
  }
  .demo-palette-1-orange_2::after {
    content: " ";
    display: block;
    background-color: #d6bd4e;
    height: 150px;
  }
`;

export default Home;
