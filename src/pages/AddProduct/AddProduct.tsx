import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ThemeContext } from "../../context/ThemeContext";
import "./AddProduct.scss";
function AddProduct() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      <div className="container">
        <div className="main-container card add-product-container">
          <h2>Agregar nuevo producto</h2>
          <div className="form-container">
            <form className="add-product-form">
              <div className="field-container">
                <label>Nombre</label>
                <input type="text" />
              </div>
              <div className="field-container">
                <label>Precio</label>
                <input type="text" />
              </div>
              <div className="field-container">
                <label>Cantidad</label>
                <input type="text" />
              </div>
              <button>Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
