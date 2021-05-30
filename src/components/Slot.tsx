import React from "react";
import styled from "styled-components";

const Slot: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Slot;
