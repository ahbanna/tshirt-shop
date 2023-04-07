import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);

  let message;
  if (cart.length === 0) {
    message = <p className="red">Please add some products</p>;
  } else {
    message = <p className="green">Thanks for adding product</p>;
  }

  return (
    <div>
      <h2>Order summary</h2>
      <h4>Total items: {cart.length}</h4>
      {message}
      {cart.length > 2 ? "Thanks for adding more than two items" : ""}
      {/* cart is as array, so we need map */}
      {cart.map((shirt) => (
        <h5 key={shirt._id}>
          {shirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(shirt._id)}>X</button>
        </h5>
      ))}
    </div>
  );
};

export default Cart;
