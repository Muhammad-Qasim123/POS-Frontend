import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ItemPage from "./pages/itemPage";
import CartPage from "./pages/cartPage";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
