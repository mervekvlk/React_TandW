import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import BlogPage from "./Pages/BlogPage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
import BreadCrumbAll from "./Components/BreadCrumbAll";

function App() {
  return (
    <>
      
        <Header />
        <BreadCrumbAll/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Blogs" element={<BlogPage/>} />
          <Route path="/Cart" element={<CartPage/>} />
          <Route path="/Shop" element={<ProductPage/>} />
          
        </Routes>
        <Footer />
      
      
    </>
  );
}

export default App;
