import "./App.scss";
import Home from "./pages/Home/Home";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <Home />
    </ShopProvider>
  );
}

export default App;
