import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Products from "./component/Products";
import News from "./component/News";
import About from "./component/About";
import NotFound from "./component/NotFound";
import Footer from "./component/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
