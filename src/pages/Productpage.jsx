import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Selectedproduct from "../components/Selectedproduct";
import { ProductContext } from "../context/Productcontext";

export default function Productpage() {
  const navigate = useNavigate();
  const [detail, SetProductData, Cart, Setcart] = useContext(ProductContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  //   const [selectedProduct, SetSelectedProduct] = useState(null);

  const viewProductDetails = (product) => {
    console.log("set=>", product);
    // SetSelectedProduct(product);
    // console.log(selectedProduct);
    SetProductData(product);
    console.log(detail);
    navigate("/selectedproduct");
  };

  const [products, setProducts] = useState([]);

  console.log("products=>", products);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <h1>Product Catalog</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // width: "20%",
          padding: "10px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="ProductCard"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "16px",
              padding: "18px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ margin: "10px" }}>
              <img src={product.image} alt={product.title} width="100%" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
              // style={{ height: "12rem" }}
              >
                <h4 style={{ fontSize: "16px" }}>
                  {product.title.substring(0, 30)}
                </h4>
                {/* <p>{product.title.substring(0, 30)}...</p> */}
                {/* <p>{product.price}</p> */}
              </div>
              <div>
                <button
                  onClick={() => viewProductDetails(product)}
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
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
