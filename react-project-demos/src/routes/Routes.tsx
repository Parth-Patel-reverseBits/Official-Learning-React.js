import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import UseActionState from "../hooks/useActionState/Index";
import UseCallBack from "../hooks/useCallBack/Index";
import UseContext from "../hooks/useContext/Index";
import UseDebugValue from "../hooks/useDebugValue/Index";
import UseDeferredValue from "../hooks/useDeferredValue/Index";
import UseId from "../hooks/useId/Index";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/use-action-state" element={<UseActionState />} />
      <Route path="/use-callback" element={<UseCallBack />} />
      <Route path="/use-context" element={<UseContext />} />
      <Route path="/use-debug-value" element={<UseDebugValue />} />
      <Route path="/Use-deferred-value" element={<UseDeferredValue />} />
      <Route path="/use-id" element={<UseId />} />
    </Routes>
  );
};

export default routes;
