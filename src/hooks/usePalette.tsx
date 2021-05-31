import { useEffect, useState } from "react";

const usePalette = (index: number) => {
  const [currentColor, setCurrentColor]: [string | null, any] = useState(null);
  const [palette, setPalette]: [string[], any] = useState([]);

  useEffect(() => {
    const localPalette = localStorage.getItem(`palette${index}`) ?? JSON.stringify([]);
    setPalette(JSON.parse(localPalette));
  }, []);

  useEffect(() => {
    localStorage.setItem(`palette${index}`, JSON.stringify(palette));
  }, [palette]);

  const addColor = (): void => {
    // 선택한 색이 중복되거나 없을 경우
    if (currentColor === null) return;
    if (palette.length >= 8) return;
    if (palette.includes(currentColor)) {
      console.log("이미 존재하는 색입니다.");
      return;
    }
    setPalette([...palette, currentColor]);
    localStorage.setItem(`palette${index}`, JSON.stringify(palette));
    console.log(JSON.stringify(palette));
  };

  const removeColor = (color: string): void => {
    console.log(palette);
    palette.forEach((_color) => console.log(_color, color));
    setPalette((palette: string[]) => palette.filter((_color) => _color !== color));
    localStorage.setItem(`palette${index}`, JSON.stringify(palette));
    console.log(JSON.stringify(palette));
  };

  return { palette, setCurrentColor, addColor, removeColor };
};

export default usePalette;
