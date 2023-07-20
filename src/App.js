import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route as RouteElement } from "react-router-dom";
import StoreProvider from "./StoreProvider";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import EditProductForm from "./EditProductForm";
import AddProductForm from "./AddProductForm";
import "./App.css";

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <nav>
          <ul>
            <li>
              <Link className="products" to="/">
                Products
              </Link>
            </li>
            <li>
              <Link className="add-product" to="/product/add">
                Add Product
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <RouteElement path="/" element={<ProductList />} />
          <RouteElement path="/product/:id" element={<ProductDetails />} />
          <RouteElement
            path="/product/edit/:id"
            element={<EditProductForm />}
          />
          <RouteElement path="/product/add" element={<AddProductForm />} />
        </Routes>
      </StoreProvider>
    </Router>
  );
};

export default App;
