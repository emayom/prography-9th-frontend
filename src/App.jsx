import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="*"
          element={<Navigate replace to={import.meta.env.BASE_URL} />}
        />
      </Routes>
    </>
  );
}

export default App;
