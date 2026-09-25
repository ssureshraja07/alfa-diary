import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Quality from "./pages/Quality";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* Fallback alias route for about */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;