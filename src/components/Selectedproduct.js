import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/Productcontext";
import { Link, useNavigate } from "react-router-dom";

export default function Selectedproduct() {
  const [detail, SetProductData, Cart, Setcart] = useContext(ProductContext);
  // const [cart, setCart] = useState([]);
  // console.log("ghg", cart);
  const navigate = useNavigate();

  const addToCart = (product, quantity) => {
    console.log("item=>", product);
    const item = {
      productId: product.id,
      name: product.title,
      quantity: quantity,
      price: product.price,
    };
    console.log("dsadas", item);
    Setcart([...Cart, item]);
    // console.log("cart detail", cart);
    // SetCartData(item);
    navigate("/cartpage");
  };

  return (
    <>
      <div className="ProductDetails">
        <h1>{detail.title}</h1>
        <img src={detail.image} alt={detail.title} />
        <h2>{detail.title}</h2>
        <p>{detail.description}</p>
        <p>Price: {detail.price}Rupees</p>
        {/* <input type="number" placeholder="Quantity" min="1" defaultValue="1" /> */}
        <button
          onClick={() => addToCart(detail, 1)}
          style={{
            width: "7rem",
            height: "2rem",
            padding: "7px",
            color: "white",
            // backgroundColor: 'linear-gradient()',
            border: "antiquewhite",
            background: "linear-gradient(to top, #c31432, #240b36)",
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
