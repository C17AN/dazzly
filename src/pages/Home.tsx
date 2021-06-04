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
      <DemoImageCard>
        <p>Photo By : C17AN</p>
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
      </DemoImageCard>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-family: "koPub Dotum";
  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    -webkit-animation: tracking-in-expand 1.4s 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand 1.4s 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
  p {
    font-size: 1.4rem;
    margin: 1rem 0;
  }
  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Description = styled.div`
  padding: 2rem;
`;

const DemoImageCard = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 2rem 2rem 2rem;
  background-color: rgba(200, 200, 200, 0.1);
  border-radius: 12px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.6);
  p {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  img {
    display: inline-block;
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

export default Home;
