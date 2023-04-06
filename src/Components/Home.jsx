import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "./Tshirt";
import Cart from "./Cart";
import "./Style.css";
const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            handleCart={handleAddCart}
            tshirt={tshirt}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
