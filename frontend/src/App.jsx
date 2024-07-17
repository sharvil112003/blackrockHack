import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import JobDetail from "./components/jobDetails";
import AgriROI from "./components/pages/AgriROI";
import GovScheme from "./components/pages/GovScheme";
import { Signup } from "./components/pages/Signup";
import Courses from "./components/pages/Inves";
import MandiPrices from "./components/MandiPrices";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/AgriROI" element={<AgriROI />} />
        <Route exact path="/GovScheme" element={<GovScheme />} />
        <Route exact path="/Courses" element={<Courses />} />
        <Route path="/mandi-prices" element={<MandiPrices />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
