import React, { useContext, useState } from "react";
import Slot from "../components/Slot";
import { PaletteContext } from "../App";
import Palette from "../components/Palette";
import AddPalette from "../components/AddPalette";
import styled from "styled-components";

const MyPalette = () => {
  const { paletteCount } = useContext(PaletteContext);
  const [listType, setListType] = useState("photo");

  return (
    <Container>
      <Menu>
        <TypeContainer>
          <h3 onClick={() => setListType("photo")} className="type-left">
            내 사진 목록
          </h3>
          <h3 onClick={() => setListType("palette")}>내 팔레트 목록</h3>
        </TypeContainer>
        <div>
          <input type="checkbox" id="background-show-checkbox" />
          <label htmlFor="background-show-checkbox">배경 그라데이션 효과 표시</label>
        </div>
      </Menu>
      <Slot>
        {Array.from(Array(paletteCount), (i) => i).map((palette: any, index: number) => (
          <Palette index={index + 1} />
        ))}
        {Array.from(Array(4 - paletteCount), (i) => i).map((palette, index) => (
          <AddPalette />
        ))}
      </Slot>
    </Container>
  );
};

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Menu = styled.div`
  height: 50px;
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.05rem;
  }
  div {
    display: flex;
    align-items: center;
    label {
      font-size: 0.88rem;
      font-family: "kyobohand";
      cursor: pointer;
    }
  }
  #background-show-checkbox {
    margin-right: 10px;
  }
`;

const TypeContainer = styled.div`
  display: flex;
  h3 {
    cursor: pointer;
  }
  .type-left {
    border-right: 1px solid #333;
    padding-right: 1rem;
    margin-right: 1rem;
  }
`;

export default MyPalette;
