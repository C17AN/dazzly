import React from "react";
import styled from "styled-components";
import usePalette from "../hooks/usePalette";

interface Props {}

const Palette = (props: Props) => {
  const { palette, addColor, removeColor, setCurrentColor } = usePalette();

  return (
    <Container>
      <input type="color" onChange={(e) => setCurrentColor(e.target.value)} />
      <button onClick={() => addColor()}>색상 추가</button>
      <div>
        {palette.map((color) => (
          <div>{color}</div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default Palette;
