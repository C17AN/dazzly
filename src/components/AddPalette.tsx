import React from "react";
import styled from "styled-components";

interface Props {}

const AddPalette = (props: Props) => {
  return (
    <Container>
      <PaletteConfig>
        <button>새 팔레트를 추가해 보세요</button>
      </PaletteConfig>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  display: flex;
  flex: 1;
  border-right: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
`;

const PaletteConfig = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  border: 5px solid #cdcdcd;
  border-radius: 12px;
  border-style: dotted;

  button {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    color: #666;
  }
`;

export default AddPalette;
