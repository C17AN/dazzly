import React, { useState } from "react";
import Palette from "./components/Palette";
import { GlobalStyle } from "./style/global";
import Slot from "./components/Slot";
import AddPalette from "./components/AddPalette";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [paletteList, setPaletteList]: [boolean[], any] = useState([]);
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Slot>
        {paletteList.map((palette, index) => (
          <Palette />
        ))}
        <Palette />
        <Palette />
        <AddPalette />
        <AddPalette />
      </Slot>
      <Footer />
    </div>
  );
}

export default App;
