import React from "react";
import "./Style.css";
const Tshirt = ({ tshirt, handleCart: handleAddCart }) => {
  const { _id, index, price, picture, name, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <p>Name:{name} </p>
      <p>Price: ${price} </p>
      <button onClick={() => handleAddCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
