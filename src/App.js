import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateResultPage from "./CreateResultPage";
import ResultPage from "./ResultPage";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateResultPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}
