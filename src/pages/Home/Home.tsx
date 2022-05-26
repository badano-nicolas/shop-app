import Cart from "../../components/Cart/Cart";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <Products />
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
