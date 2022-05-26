import "./App.scss";
import Home from "./components/Home/Home";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
