import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ItemPage from "./pages/itemPage";
import CartPage from "./pages/cartPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
