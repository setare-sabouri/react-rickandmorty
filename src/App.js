import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import Home from "./pages/home/Home";
import Location from "./pages/locations/locations";
import Episodes from "./pages/episodes/episodes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
