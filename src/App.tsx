import React, { createContext, useEffect, useState } from "react";
import Palette from "./components/Palette";
import { GlobalStyle } from "./style/global";
import Slot from "./components/Slot";
import AddPalette from "./components/AddPalette";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const PaletteContext = createContext<any | null>(null);

function App() {
  useEffect(() => {
    const localPaletteCount = Number(localStorage.getItem("paletteCount"));
    setPaletteCount(localPaletteCount);
  }, []);

  const [paletteCount, setPaletteCount]: [number, any] = useState(0);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <PaletteContext.Provider value={{ paletteCount, setPaletteCount }}>
        <Slot>
          {Array.from(Array(paletteCount), (i) => i).map((palette: any, index: number) => (
            <Palette index={index + 1} />
          ))}
          {Array.from(Array(4 - paletteCount), (i) => i).map((palette, index) => (
            <AddPalette />
          ))}
          {/* <Palette />
        <Palette />
        <AddPalette />
        <AddPalette /> */}
        </Slot>
      </PaletteContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
