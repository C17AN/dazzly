import React from "react";
import styled from "styled-components";

interface Props {}

const Recent = (props: Props) => {
  return (
    <Container>
      <Title>
        <h3>최근 추가된 팔레트</h3>
      </Title>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  background-color: rgba(150, 230, 180, 0.2);
`;

const Title = styled.div`
  h3 {
    font-size: 1.5rem;
    font-family: "KoPub Dotum";
    font-weight: 100;
  }
`;

export default Recent;
