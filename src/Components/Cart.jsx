import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h3>Selected Total Item: {cart.length}</h3>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          Itam Name: {tshirt.name}{" "}
          <button onClick={() => handleRemoveCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
