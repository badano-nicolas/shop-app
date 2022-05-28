import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function AddProduct() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h2>Agregar nuevo producto</h2>
      <form>
        <div className="form-container">
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
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
