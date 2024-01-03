import { React, createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [detail, Setdetail] = useState("");
  const [Cart, Setcart] = useState([]);

  function SetProductData(detail) {
    Setdetail(detail);
  }

  // function SetCartData(cartdetail) {

  //   Setcart([...Cart, cartdetail]);

  // }

  return (
    <ProductContext.Provider value={[detail, SetProductData, Cart, Setcart]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
