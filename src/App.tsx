import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./style/global";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MyPalette from "./pages/MyPalette";
import Competition from "./pages/Competition";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Gallery from "./pages/Gallery";
import SignUp from "./pages/SignUp";

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
      <PaletteContext.Provider value={{ paletteCount, setPaletteCount }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/palette" component={MyPalette}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/competition" component={Competition}></Route>
            <Route path="/setting" component={Settings}></Route>
            <Route path="/signup" component={SignUp}></Route>
          </Switch>
        </Router>
      </PaletteContext.Provider>
    </div>
  );
}

export default App;
