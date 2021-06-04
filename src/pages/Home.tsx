import styled from "styled-components";
import Demo from "../components/Home/Demo";

const Home = () => {
  return (
    <Container>
      <Description>
        <h2>오늘의 나는, 과연 어떤 색일까?</h2>
        <p>여러분의 색감을 아낌없이 어필해 보세요!</p>
        <p>색으로 표현하는 SNS, 대즐리</p>
      </Description>
      <Demo />
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
    -webkit-animation: focus-in-expand 1s 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: focus-in-expand 1s 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  p {
    font-size: 1.4rem;
    margin: 1rem 0;
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
`;

const Description = styled.div`
  padding: 2rem;
`;

export default Home;
