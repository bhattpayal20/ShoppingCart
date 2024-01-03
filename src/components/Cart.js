import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/Productcontext";
import { Link } from "react-router-dom";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [detail, SetProductData, Cart, Setcart] = useContext(ProductContext);

  console.log("cartdetail=>", Cart);
  const removeFromCart = (productId) => {
    const updatedCart = Cart.filter((item) => item.productId !== productId);
    Setcart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    console.log("quantity=>", newQuantity);
    const updatedCart = Cart.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    Setcart(updatedCart);
  };

  useEffect(() => {
    // Calculate total price whenever the cart changes
    const totalPrice = Cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [Cart]);

  return (
    <div
      className="ShoppingCart"
      style={{ display: "flex", flexDirection: "column", padding: "43px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          // marginBottom: "15px",
        }}
      >
        <h2>Shopping Cart</h2>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            background: "linear-gradient(to bottom, #1919c5, #86a8e7, #28ddd1)",
            padding: "10px",
            borderRadius: "9px",
          }}
        >
          Go to home page
        </Link>
      </div>
      {Cart.map((item) => (
        <div
          key={item.productId}
          style={{
            border: "1px solid",
            width: "31rem",
            padding: "19px",
            backgroundColor: "aliceblue",
            borderRadius: "14px",
            marginTop: "28px",
            boxShadow: "2px 2px 2px 2px #070733",
          }}
        >
          <h3>{item.name}</h3>
          <p>
            Quantity:{" "}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.productId, e.target.value)}
            />
          </p>
          <p>Price: {item.price}Rupees</p>
          <button
            onClick={() => removeFromCart(item.productId)}
            style={{
              color: "white",
              textDecoration: "none",
              background:
                "linear-gradient(rgb(25, 25, 197), rgb(134, 168, 231), rgb(40, 221, 209))",
              padding: "10px",
              borderRadius: "9px",
              border: "2px white",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <p style={{ fontWeight: "bold", fontSize: "18px" }}>
        Total Price: {totalPrice}Rupees
      </p>
    </div>
  );
}
