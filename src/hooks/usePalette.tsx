import { useEffect, useState } from "react";

const usePalette = () => {
  const [currentColor, setCurrentColor]: [string | null, any] = useState(null);
  const [palette, setPalette]: [string[], any] = useState([]);

  useEffect(() => {
    const localPalette = localStorage.getItem("palette") ?? "";
    // 브라우저에 저장된 팔레트가 없으면, 현재 작업한 팔레트를 저장함
    if (localPalette.length == 0) {
      localStorage.setItem("palette", JSON.stringify(palette));
    } else {
      const parsedLocalPalette = JSON.parse(localPalette);
      currentColor !== null
        ? localStorage.setItem("palette", JSON.stringify([...parsedLocalPalette, currentColor]))
        : localStorage.setItem("palette", JSON.stringify([...parsedLocalPalette]));
    }
  }, [palette]);

  const addColor = (): void => {
    setPalette([...palette, currentColor]);
  };

  const removeColor = (color: string): void => {
    setPalette(palette.filter((_color) => _color !== color));
  };

  return { palette, setCurrentColor, addColor, removeColor };
};

export default usePalette;
