import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
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
      <Header countCartItems={cartItems.length} />
      <div className="container">
        <h1 className="pageTitle">Products</h1>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.images[0]} alt={product.description} />
              <div className="product__content">
                <h4>{product.title}</h4>
                <p>{product.category.name}</p>
                <p>NOK {product.price}</p>
                <div className="product__btnContainer">
                  <button className="productBtn" onClick={() => onAdd(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
