import './App.css';
import CreateProductPage from "./pages/CreateProductPage";
import AllProductsPage from "./pages/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import mainContext from "./context/mainContext";


function App() {

  const [getProduct, setProduct] = useState([])
  const [getSelected, setSelected] = useState(null)
  const [getAddedToCart, setAddedToCart] = useState([])



  return (
    <div className="App">
      <mainContext.Provider value={{getProduct, setProduct, getSelected, setSelected, getAddedToCart, setAddedToCart}}>
        <BrowserRouter>
          <Toolbar/>
          <Routes>
            <Route path="/" element={<CreateProductPage/>}/>
            <Route path="/allproducts" element={<AllProductsPage/>}/>
            <Route path="/product/:title" element={<SingleProductPage/>}/>
            <Route path="/cart" element={<ShoppingCartPage/>}/>
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </div>
  );
}

export default App;
