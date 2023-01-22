import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:title" element={<SingleProduct />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
