import { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useShop from "../../context/ShopContext";
import { ThemeContext } from "../../context/ThemeContext";
import "./AddProduct.scss";
import { Product } from "../../actions/shoppingActions";
import { useNavigate } from "react-router-dom";

const initProduct: Product = {
  name: "",
  price: 0,
  amount: 0,
  id: 0,
};

// should fix any type for events

function AddProduct() {
  const { theme } = useContext(ThemeContext);
  const { addNewProduct } = useShop();
  const [product, setProduct] = useState(initProduct);

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const newProduct = (ev: any) => {
    ev.preventDefault();
    addNewProduct(product);
    navigate("/");
  };

  return (
    <div className={theme}>
      <Navbar />
      <div className="container">
        <div className="main-container card add-product-container">
          <h2>Agregar nuevo producto</h2>
          <div className="form-container">
            <form
              className="add-product-form"
              onSubmit={(ev: any) => newProduct(ev)}
            >
              <div className="field-container">
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={(ev: any) => handleChange(ev)}
                />
              </div>
              <div className="field-container">
                <label>Precio</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={(ev: any) => handleChange(ev)}
                />
              </div>
              <div className="field-container">
                <label>Cantidad</label>
                <input
                  type="number"
                  name="amount"
                  value={product.amount}
                  onChange={(ev: any) => handleChange(ev)}
                />
              </div>
              <button type="submit">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
