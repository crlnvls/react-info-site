import React from "react";
import { Routes, Route } from "react-router-dom";

import Info from "./pages/Info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Info />}></Route>
    </Routes>
  );
}

export default App;
