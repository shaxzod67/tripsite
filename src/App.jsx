import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourTypes from "./components/TourTypes/tourtypes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/header" element={<Header />} />
        <Route path="/tourtypes" element={<TourTypes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
