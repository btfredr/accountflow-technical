import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.images[0]} alt={product.description} />
      <div className="product__content">
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <div className="product__btnContainer">
          <button>
            <a href=""></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
