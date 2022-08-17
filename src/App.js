import React from "react";
import Teacher from "./Component.js/Teacher";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdditionalData from "./Component.js/Additional";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Teacher />}></Route>
          <Route path="/center/name=:name" element={<AdditionalData />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
