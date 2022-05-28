import "./Navbar.scss";
import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="container navbar-container">
      <div className="navbar">
        <h1 className="title text">Shop</h1>
        <div className="list-container">
          <ul className="text">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/add-product">Nuevo Producto</Link>
            </li>
            <li>
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <CgDarkMode />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
