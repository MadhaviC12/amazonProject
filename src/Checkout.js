// Checkout.js
import React, { useEffect } from "react";
import "./Checkout.css";
import "./Product";
import "./Product.css";
import { useState } from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShowChartIcon from "@mui/icons-material/ShowChart";

function Checkout({ basket, setBasket }) {
  // const [quantity, setQuantity] = useState(basket.map(() => 1));
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    setQuantity(basket.map(() => 1));
  }, [basket]);

  const increaseQuantity = (index) => {
    const updatedQuantity = [...quantity];
    updatedQuantity[index] += 1;
    setQuantity(updatedQuantity);
  };

  const decreaseQuantity = (index) => {
    const updatedQuantity = [...quantity];
    if (updatedQuantity[index] > 1) {
      updatedQuantity[index] -= 1;
      setQuantity(updatedQuantity);
    }
  };

  const deleteItem = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);

    const updatedQuantity = [...quantity];
    updatedQuantity.splice(index, 1);
    setQuantity(updatedQuantity);
  };

  const totalPrice = basket.reduce(
    (total, item, index) => total + item.price * quantity[index],
    0
  );

  return (
    <div className="checkout">
      <h2>Your Shopping Basket</h2>
      {basket.map((item, index) => (
        <div key={index} className="checkout__item">
          <img
            className="checkout__itemImage"
            src={item.image}
            alt={item.title}
          />
          <div className="checkout__itemInfo">
            <p className="checkout__itemTitle">{item.title}</p>
            <p className="checkout__itemPrice">₹{item.price}</p>
            <p className="checkout__itemIncreasePrice">
              Price Increase
              <ShowChartIcon className="checkout__showChart" />
              {item.price * quantity[index]}
            </p>
          </div>
          <div className="checkout__quantityControls">
            <button onClick={() => decreaseQuantity(index)}>-</button>
            <span>{quantity[index]}</span>
            <button onClick={() => increaseQuantity(index)}>+</button>

            <RemoveShoppingCartIcon
              className="delete"
              onClick={() => deleteItem(index)}
            ></RemoveShoppingCartIcon>
          </div>
        </div>
      ))}

      {/* Total price */}
      <div className="checkout__total">
        <p>Total Price:₹{totalPrice}</p>
      </div>
    </div>
  );
}

export default Checkout;
