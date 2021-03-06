import { useContext } from "react";
import Cart from "../../components/Cart/Cart";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      <div className="container">
        <div className="main-container">
          <Products />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;
