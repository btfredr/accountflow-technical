import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=9"
      );

      setProducts(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container"></div>
    </>
  );
}

export default App;
