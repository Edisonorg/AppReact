import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisualizacionDatos from "./components/VisualizacionDatos";
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/VisualizacionDatos"
            element={<VisualizacionDatos />}
          ></Route>
          <Route path="/Cards" element={<Cards />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
