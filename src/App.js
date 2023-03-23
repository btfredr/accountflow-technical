import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

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
  return (
    <>
      <div className="container">
        <div className="products">
          <div className="product">
            {products.map((product) => (
              <>
                <img src={product.images[0]} alt={product.description} />
                <div className="product__content">
                  <h4>{product.title}</h4>
                  <p>{product.price}</p>
                  <div className="product__btnContainer">
                    <button>
                      <a href="">Add to cart</a>
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
