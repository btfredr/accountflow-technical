import React from "react";

const Cart = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.25;
  const totalPrice = itemsPrice + taxPrice;
  return (
    <aside>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <div>
              <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div>
              <button onClick={() => onAdd(item)}>+</button>
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
                onClick={() => alert("Checkout functionality coming soon!")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Cart;
