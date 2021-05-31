import React, { useContext } from "react";
import styled from "styled-components";
import { PaletteContext } from "../App";

interface Props {}

const AddPalette = (props: Props) => {
  const { paletteCount, setPaletteCount } = useContext(PaletteContext);

  const createNewPalette = () => {
    setPaletteCount(paletteCount + 1);
    localStorage.setItem("paletteCount", paletteCount + 1);
  };

  const removePalette = () => {
    setPaletteCount(paletteCount - 1);
    localStorage.setItem("paletteCount", String(paletteCount - 1));
  };

  return (
    <Container>
      <PaletteConfig>
        <button onClick={createNewPalette}>새 팔레트를 추가해 보세요</button>
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
  border: 3px solid #cdcdcd;
  border-radius: 12px;
  border-style: dotted;
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-in;
    border-color: #47bd86;
    cursor: pointer;
  }

  &:hover button {
    color: #47bd86;
    transform: scale(1.02);
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    color: #666;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
`;

export default AddPalette;
