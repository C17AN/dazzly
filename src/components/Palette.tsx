import React from "react";
import styled from "styled-components";
import usePalette from "../hooks/usePalette";

interface IProps {
  index: number;
}

const Palette: React.FC<IProps> = ({ index }) => {
  const { palette, addColor, removeColor, setCurrentColor, paletteName, changePaletteName } =
    usePalette(index);

  return (
    <Container>
      <PaletteConfig>
        <label htmlFor="">📋 {index}번 팔레트</label>
        <input className="palette-title" placeholder={"팔레트 이름을 정해주세요"} />
        <div className="palette-add-color-container">
          <label>🎨 색상 선택</label>
          <input type="color" onChange={(e) => setCurrentColor(e.target.value)} />
          <button className="palette-add-color-button" onClick={() => addColor()}>
            색상 추가
          </button>
        </div>
        <label htmlFor="">📝 팔레트 색상 목록 (최대 8색)</label>
        <div>
          {palette.length !== 0 ? (
            palette.map((color, idx) => (
              <Color key={idx} color={color} onClick={() => removeColor(color)}>
                {color}
              </Color>
            ))
          ) : (
            <Color>"색상 추가"를 눌러 색을 추가해 보세요!</Color>
          )}
        </div>
      </PaletteConfig>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  display: flex;
  flex: 1;
  justify-content: center;
  border-right: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
`;

const PaletteConfig = styled.div`
  font-family: "KyoboHand";
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 10px 10px 15px 3px rgb(0 0 0 / 30%);
  backdrop-filter: blur(5px);

  label {
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  label:first-child {
    margin-top: 0px;
  }

  .palette-title {
    padding: 8px;
    width: 250px;
  }

  .palette-add-color-container {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      width: 100%;
    }

    input {
      width: 100%;
      height: 50px;
      background-color: transparent;
      overflow: hidden;
      padding: 0;
      margin: 0;
      border: none;
      border-image: none;
      cursor: pointer;
    }
  }

  .palette-add-color-button {
    width: 100%;
    padding: 10px;
    font-size: 0.92rem;
    border-radius: 6px;
    outline: none;
    border: 3px solid #e7645b;
    cursor: pointer;
    transition: 0.2s ease-in;
    background-color: white;
    margin-top: 10px;
    &:hover {
      transition: 0.2s ease-in;
      border-color: #46c298;
    }
  }
`;

const Color = styled.div<{ color?: string }>`
  width: 100%;
  height: 70px;
  display: flex;
  font-size: 0.88rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  color: ${(props) =>
    props.color === undefined ? "black" : props.color > "#aaaaaa" ? "black" : "white"};
  background-color: ${(props) => props.color || "white"};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

export default Palette;
