import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return <Container {...props} />;
};

const Container = styled.input`
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border-color: transparent;
  border-top: 1px solid #cdcdcd;
  border-left: 1px solid #cdcdcd;
`;

export default Input;
