import { useEffect, useState } from "react";

const usePalette = (index: number) => {
  const [currentColor, setCurrentColor]: [string | null, any] = useState(null);
  const [paletteName, setPaletteName]: [string | null, any] = useState("");
  const [palette, setPalette]: [string[], any] = useState([]);

  useEffect(() => {
    const localPalette = localStorage.getItem(`palette${index}`) ?? JSON.stringify([]);
    const localPaletteName = localStorage.getItem(`palette${index}__name` ?? "");
    setPalette(JSON.parse(localPalette));
    setPaletteName(localPaletteName);
  }, []);

  useEffect(() => {
    localStorage.setItem(`palette${index}__name`, paletteName);
  }, [paletteName]);

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
  };

  const removeColor = (color: string): void => {
    palette.forEach((_color) => console.log(_color, color));
    setPalette((palette: string[]) => palette.filter((_color) => _color !== color));
  };

  const changePaletteName = (title: string): void => {
    setPaletteName(paletteName);
    //localStorage.setItem(`palette${index}__name`, title);
  };

  return { palette, setCurrentColor, addColor, removeColor, paletteName, changePaletteName };
};

export default usePalette;
