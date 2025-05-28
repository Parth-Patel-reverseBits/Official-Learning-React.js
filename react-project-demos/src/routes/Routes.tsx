import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import UseActionState from "../hooks/useActionState/Index";
const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/use-action-state" element={<UseActionState />} />
    </Routes>
  );
};

export default routes;
