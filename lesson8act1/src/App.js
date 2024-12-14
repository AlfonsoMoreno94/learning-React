import Inicio from "./paginas/Inicio.js";
import Rey from "./paginas/Rey.js";
import Nav from "./resources/Nav.js";
import Error from "./paginas/Error.js";
import { Datos } from "./resources/Context.js";
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <Datos>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/:rey" element={<Rey/>} />
          <Route path="/leogivildo" element={<Navigate to ="/leovigildo"/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </Datos>
  );
}

export default App;
