import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);
  return (
    <div>
      <h2>Order summary</h2>
      <h4>Total items: {cart.length}</h4>
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
