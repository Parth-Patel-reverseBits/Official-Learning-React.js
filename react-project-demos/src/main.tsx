import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreservedState from "./preserving-and-resetting-state/Index.tsx";
import RecuerContextAPI from "./reducer-and-context-api/Index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preserved-state" element={<PreservedState />} />
        <Route path="/reducer-and-context-api" element={<RecuerContextAPI />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
