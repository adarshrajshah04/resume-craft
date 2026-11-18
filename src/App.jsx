
import React from "react";
import { Route, Routes } from "react-router-dom";

import Templates from "./components/Templates";
import EditMain from "./components/Edit/EditMain";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Templates />} />
      <Route path="/editor" element={<EditMain />} />
    </Routes>
  );
};

export default App;
