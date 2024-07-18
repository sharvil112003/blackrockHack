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
import FarmerInfoForm from "./pages/FarmerInfoForm";
import BlogList from "./components/BlogList";
import blogs from './data/Blogs';
import Land from "./pages/Land";
import LeaseLand from "./pages/LeaseLand";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/govtschemes" element={<GovScheme />} />
        <Route exact path="/mandi-prices" element={<MandiPrices />} />
        <Route exact path="/scholarship" element={<Scholarship />} />
        <Route exact path="/land" element={<Land />} /> 
        <Route exact path="/leaseland" element={<LeaseLand />} /> 
        <Route exact path="/cropForm" element={<CropForm />} />
        <Route path="/farmerInfoForm" element={<FarmerInfoForm />} />
        <Route path="/blogs" element={<BlogList blogs={blogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
