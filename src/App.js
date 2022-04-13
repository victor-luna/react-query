import React, { useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Anterior } from "./pages/Anterior";
import { Proximo } from "./pages/Proximo";

function App() {
  const anteriorRef = useRef(null);
  const proximoRef = useRef(null);

  const anteriorButtonClick = () => {
    anteriorRef.current.style.pointerEvents = "none";
    proximoRef.current.style.pointerEvents = "auto";
  };

  const proximoButtonClick = () => {
    proximoRef.current.style.pointerEvents = "none";
    anteriorRef.current.style.pointerEvents = "auto";
  };

  return (
    <div className="App">
      <nav>
        <Link
          to="/"
          ref={anteriorRef}
          onClick={anteriorButtonClick}
          style={{ pointerEvents: "none" }}
        >
          Anterior
        </Link>{" "}
        <Link to="/proximo" ref={proximoRef} onClick={proximoButtonClick}>
          Próximo
        </Link>
      </nav>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Anterior />} />
        <Route path="proximo" element={<Proximo />}>
          <Route path=":aboutID" element={<Proximo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
