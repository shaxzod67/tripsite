import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header"; // ✅ O‘z Header komponentingizni import qiling
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/header" element={<Header />} />{" "}
        {/* ✅ Bu siz yozgan Swiper Header */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
