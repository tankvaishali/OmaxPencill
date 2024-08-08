
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Eraser from "./Components/Eraser";
import Polymer from "./Components/Polymer";
import Paper from "./Components/Paper";
import Sharpner from "./Components/Sharpner";
import NewsPage from "./Components/NewsPage";
import Contactus from "./Components/Contactus";
import Gallery from "./Components/Gallery";
// import Gallery from "./Components/Gallery";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/About" element={<About />} />
          <Route path="/productPage" element={<Product />} />
          <Route path="/EraserPage" element={<Eraser />}></Route>
          <Route path="/PolymerPage" element={<Polymer />}></Route>
          <Route path="/PaperPage" element={<Paper />}></Route>
          <Route path="/SharpnerPage" element={<Sharpner />}></Route>
          <Route path="/NewsPage" element={<NewsPage />}></Route>
          <Route path="/ContactusPage" element={<Contactus />}></Route>
        
          <Route path="/GalleryPage" element={<Gallery/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
