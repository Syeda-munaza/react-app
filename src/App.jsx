import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./pages/Navbar";



export default function App() {
  return (
    <div>
      <Navbar />  {/* This ensures the Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

    
  );
}
