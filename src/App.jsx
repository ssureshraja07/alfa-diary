import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import Products from "./pages/Products";

import AboutUs from "./pages/AboutUs";
import Quality from "./pages/Quality";

function App() {
  return (
    <BrowserRouter basename="/alfa-diary">
      <SmoothScroll>
        <Navbar />

        <Routes>
  <Route path="/" element={<div className="pt-32 text-5xl">HOME TEST</div>} />
  <Route path="/products" element={<Products />} />
  <Route path="/quality" element={<Quality />} />
  <Route path="/aboutus" element={<AboutUs />} />
  <Route path="/about" element={<AboutUs />} />
</Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;