import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";

function Product({ id, title, price, rating, image, addToBasket }) {
  const handleClick = () => {
    console.log("adding prod by id to basket");
    addToBasket({
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image,
    });

    // alert when the product is added to the basket
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.innerText = `${title} added to the basket!`;
    document.body.appendChild(alertDiv);

    // Remove the alert after a short delay
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 2000);
  };
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarRateIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt={""}></img>
      <button onClick={handleClick}>Add to Basket</button>
    </div>
  );
}

export default Product;
