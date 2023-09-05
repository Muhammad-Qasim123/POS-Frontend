import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ItemPage from "./pages/itemPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
