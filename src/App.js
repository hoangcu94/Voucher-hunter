import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Products from "./pages/products/Products";
import News from "./pages/news/News";
import About from "./pages/about/About";
import NotFound from "./components/notfound/NotFound";

import "./App.scss";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <body className="App-body">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </body>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
