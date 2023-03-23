import React from "react";

const Cart = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.25;
  const totalPrice = itemsPrice + taxPrice;
  return (
    <div className="cart">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <p>Cart is empty</p>}
        {cartItems.map((item) => (
          <div className="cartItem" key={item.id}>
            <img
              className="cartImg"
              src={item.images[0]}
              alt={item.description}
            />
            <h2>{item.title}</h2>
            <div>
              <button className="cartBtn-remove" onClick={() => onRemove(item)}>
                -
              </button>
            </div>
            <div>
              <button className="cartBtn-add" onClick={() => onAdd(item)}>
                +
              </button>
            </div>
            <div>
              {item.qty} x NOK{item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div>
              <div>Items Price</div>
              <div>NOK {itemsPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Tax Price</div>
              <div>NOK {taxPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Total Price</div>
              <div>NOK {totalPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div>
              <button
                className="checkout"
                onClick={() => alert("Checkout functionality coming soon!")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
