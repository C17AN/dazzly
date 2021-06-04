import styled from "styled-components";
import Demo from "../components/Home/Demo";
import Recent from "../components/Home/Recent";

const Home = () => {
  return (
    <Container>
      <TopContent>
        <Description>
          <h2>오늘의 나는, 과연 어떤 색일까?</h2>
          <DescriptionBox>
            <p>여러분의 색감을 어필해 보세요.</p>
            <p>
              <span className="color-lightgreen">색</span>으로 표현하는 SNS, 대즐리
            </p>
          </DescriptionBox>
        </Description>
        <Demo />
      </TopContent>
      <Recent />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 100;
`;

const TopContent = styled.div`
  display: flex;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background-color: rgba(33, 27, 218, 0.3);
  backdrop-filter: grayscale(100%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url("/image/background_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.4;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  padding: 2rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 100;
    color: white;
    margin-bottom: 30px;
    line-height: 1.4;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #ffffff;
    -webkit-animation: focus-in-expand 1s 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: focus-in-expand 1s 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 0.5rem 0.7rem 0.7rem 0.7rem;
    }
    h2 {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  align-items: center;
  p {
    font-size: 1.3rem;
    color: #ffffff;
    margin: 1rem 0;
  }
  .color-lightgreen {
    color: #c0366f;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1rem;
      margin: 0.7rem 0;
    }
  }
`;

export default Home;
