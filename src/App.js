import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productpage from "./pages/Productpage";
import Selectedproduct from "./components/Selectedproduct";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productpage />} />
          <Route path="/selectedproduct" element={<Selectedproduct />} />
          <Route path="/cartpage" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
