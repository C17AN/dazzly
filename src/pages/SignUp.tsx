import React from "react";
import styled from "styled-components";

interface Props {}

const SignUp = (props: Props) => {
  return (
    <Container>
      <ContentContainer>
        <Input></Input>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input``;

const ContentContainer = styled.div`
  border: 1px solid #cdcdcd;
  width: 500px;
  height: 500px;
  margin: 2rem 1rem 0 1rem;
  border-radius: 12px;
`;

export default SignUp;
