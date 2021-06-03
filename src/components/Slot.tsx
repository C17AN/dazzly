import React from "react";
import styled from "styled-components";

const Slot: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e7c9d162;
`;

export default Slot;
