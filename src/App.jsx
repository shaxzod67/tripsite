import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourTypes from "./components/TourTypes/tourtypes";
import Collections from "./components/Collections/collections";
import Newtour from "./components/Newtour/newtour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/header" element={<Header />} />
        <Route path="/tourtypes" element={<TourTypes />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/newtour" element={<Newtour />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
