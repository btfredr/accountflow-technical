import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.wty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=9"
      );

      setProducts(result.data);
      console.log(result.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  return (
    <>
      <div className="container">
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.images[0]} alt={product.description} />
              <div className="product__content">
                <h4>{product.title}</h4>
                <p>{product.category.name}</p>
                <p>{product.price}</p>
                <div className="product__btnContainer">
                  <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </>
  );
}

export default App;
