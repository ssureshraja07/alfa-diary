import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>

      <SmoothScroll>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

        </Routes>

      </SmoothScroll>

    </BrowserRouter>
  );
}

export default App;