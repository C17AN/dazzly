import React from "react";
import Palette from "./components/Palette";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Palette />
    </div>
  );
}

export default App;
