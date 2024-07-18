import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import MandiPrices from "./components/MandiPrices";
import Scholarship from "./pages/Scholarship";
import GovScheme from "./pages/GovScheme";
import CropForm from "./pages/CropForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/govtschemes" element={<GovScheme />} />
        <Route path="/mandi-prices" element={<MandiPrices />} />
        <Route exact path="/scholarship" element={<Scholarship />} />
        <Route exact path="/cropForm" element={<CropForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
