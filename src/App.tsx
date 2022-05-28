import Home from "./pages/Home/Home";
import { ShopProvider } from "./context/ShopContext";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct/AddProduct";

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </ShopProvider>
  );
}

export default App;
